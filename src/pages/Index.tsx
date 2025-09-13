import { useState, useMemo } from "react";
import { Grid, List, Sparkles, TrendingUp, Users, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MentorCard from "@/components/MentorCard";
import TaskCard from "@/components/TaskCard";
import SearchFilters from "@/components/SearchFilters";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    skills: [] as string[],
    priceRange: [100, 2000] as [number, number],
    rating: 0,
    availability: "any",
    location: ""
  });

  // Mock data for mentors
  const mentors = [
    {
      id: "1",
      name: "Priya Sharma",
      avatar: "/api/placeholder/64/64",
      university: "IIT Delhi",
      year: "3rd Year CSE",
      skills: ["React", "Node.js", "Python", "Data Structures", "System Design"],
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 800,
      isVerified: true,
      reputationLevel: "gold" as const,
      completedTasks: 89,
    },
    {
      id: "2",
      name: "Arjun Patel",
      avatar: "/api/placeholder/64/64",
      university: "BITS Pilani",
      year: "4th Year ECE",
      skills: ["Machine Learning", "MATLAB", "Circuit Design", "IoT"],
      rating: 4.7,
      reviewCount: 94,
      hourlyRate: 600,
      isVerified: true,
      reputationLevel: "silver" as const,
      completedTasks: 67,
    },
    {
      id: "3",
      name: "Sneha Reddy",
      avatar: "/api/placeholder/64/64",
      university: "NIT Warangal",
      year: "2nd Year IT",
      skills: ["UI/UX", "Figma", "Adobe XD", "Frontend Development"],
      rating: 4.8,
      reviewCount: 76,
      hourlyRate: 500,
      isVerified: true,
      reputationLevel: "bronze" as const,
      completedTasks: 45,
    },
  ];

  // Mock data for tasks
  const tasks = [
    {
      id: "1",
      title: "Help with React Component Design & State Management",
      description: "Need assistance building a complex dashboard with multiple interactive components. Experience with React hooks and state management required.",
      category: "Web Development",
      budget: 2000,
      deadline: "5 days",
      postedBy: "Rohit Kumar",
      timeAgo: "2 hours ago",
      urgency: "medium" as const,
      skillsRequired: ["React", "JavaScript", "CSS"],
    },
    {
      id: "2",
      title: "Machine Learning Model for Stock Prediction",
      description: "Looking for help with implementing and training a neural network model for stock price prediction using Python and TensorFlow.",
      category: "Data Science",
      budget: 3500,
      deadline: "1 week",
      postedBy: "Ananya Singh",
      timeAgo: "4 hours ago",
      urgency: "high" as const,
      skillsRequired: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"],
    },
    {
      id: "3",
      title: "Mobile App UI/UX Design Review",
      description: "Need feedback and improvement suggestions for my food delivery app design. Looking for someone with good design sense.",
      category: "Design",
      budget: 1200,
      deadline: "3 days",
      postedBy: "Vikram Joshi",
      timeAgo: "1 day ago",
      urgency: "low" as const,
      skillsRequired: ["UI/UX", "Figma", "Mobile Design"],
    },
  ];

  // Filter and search functionality
  const filteredMentors = useMemo(() => {
    return mentors.filter(mentor => {
      // Search query filter
      if (searchQuery && !mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !mentor.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))) {
        return false;
      }

      // Skills filter
      if (filters.skills.length > 0 && !filters.skills.some(skill => mentor.skills.includes(skill))) {
        return false;
      }

      // Price range filter
      if (mentor.hourlyRate < filters.priceRange[0] || mentor.hourlyRate > filters.priceRange[1]) {
        return false;
      }

      // Rating filter
      if (filters.rating > 0 && mentor.rating < filters.rating) {
        return false;
      }

      return true;
    });
  }, [mentors, searchQuery, filters]);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !task.skillsRequired.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))) {
        return false;
      }
      return true;
    });
  }, [tasks, searchQuery]);

  const clearFilters = () => {
    setFilters({
      skills: [],
      priceRange: [100, 2000],
      rating: 0,
      availability: "any",
      location: ""
    });
    setSearchQuery("");
    toast({
      title: "Filters cleared",
      description: "All filters have been reset"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Main Content */}
      <main className="container py-16">
        {/* Enhanced Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">Popular Categories</h2>
            <p className="text-xl text-muted-foreground">Find the perfect mentor in your field of interest</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Programming", count: "120+ mentors", icon: BookOpen, color: "bg-gradient-primary", glow: "shadow-glow" },
              { name: "Design", count: "85+ mentors", icon: Sparkles, color: "bg-gradient-secondary", glow: "shadow-neon" },
              { name: "Data Science", count: "95+ mentors", icon: TrendingUp, color: "bg-gradient-accent", glow: "shadow-glow" },
              { name: "Interview Prep", count: "200+ mentors", icon: Users, color: "bg-gradient-primary", glow: "shadow-hover" },
            ].map((category) => (
              <Card key={category.name} className={`hover:shadow-floating transition-all duration-300 cursor-pointer group hover-lift glass-morphism border-0 ${category.glow}`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <Badge variant="secondary" className="bg-muted/50">
                    {category.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <section className="mb-12">
          <SearchFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filters={filters}
            setFilters={setFilters}
            onClearFilters={clearFilters}
          />
        </section>

        {/* Enhanced Main Content Tabs */}
        <Tabs defaultValue="mentors" className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <TabsList className="grid w-fit grid-cols-2 glass-morphism border-0 shadow-card">
              <TabsTrigger value="mentors" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
                Find Mentors ({filteredMentors.length})
              </TabsTrigger>
              <TabsTrigger value="tasks" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
                Browse Tasks ({filteredTasks.length})
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-3">
              <div className="glass-morphism border-0 rounded-lg p-1 shadow-card">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-gradient-primary" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-gradient-primary" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <TabsContent value="mentors" className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold bg-gradient-text bg-clip-text text-transparent">
                {searchQuery || filters.skills.length > 0 ? 'Filtered Results' : 'Top Mentors'}
              </h2>
              <Badge variant="outline" className="text-lg px-4 py-2">
                {filteredMentors.length} available
              </Badge>
            </div>
            
            {filteredMentors.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No mentors found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {filteredMentors.map((mentor, index) => (
                  <div key={mentor.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <MentorCard mentor={mentor} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="tasks" className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold bg-gradient-text bg-clip-text text-transparent">
                {searchQuery ? 'Filtered Tasks' : 'Recent Tasks'}
              </h2>
              <Badge variant="outline" className="text-lg px-4 py-2">
                {filteredTasks.length} posted today
              </Badge>
            </div>
            
            {filteredTasks.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No tasks found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search terms</p>
                <Button onClick={() => setSearchQuery("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2" : "grid-cols-1"}`}>
                {filteredTasks.map((task, index) => (
                  <div key={task.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <TaskCard task={task} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;