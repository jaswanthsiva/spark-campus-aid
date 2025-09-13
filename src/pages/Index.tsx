import { useState } from "react";
import { Filter, Grid, List } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MentorCard from "@/components/MentorCard";
import TaskCard from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Main Content */}
      <main className="container py-12">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Programming", count: "120+ mentors", color: "bg-primary" },
              { name: "Design", count: "85+ mentors", color: "bg-secondary" },
              { name: "Data Science", count: "95+ mentors", color: "bg-accent" },
              { name: "Interview Prep", count: "200+ mentors", color: "bg-primary-light" },
            ].map((category) => (
              <Card key={category.name} className="hover:shadow-hover transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="mentors" className="w-full">
          <div className="flex items-center justify-between mb-8">
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="mentors">Find Mentors</TabsTrigger>
              <TabsTrigger value="tasks">Browse Tasks</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="border rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <TabsContent value="mentors" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Top Mentors</h2>
              <p className="text-muted-foreground">{mentors.length} mentors available</p>
            </div>
            
            <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {mentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Recent Tasks</h2>
              <p className="text-muted-foreground">{tasks.length} tasks posted today</p>
            </div>
            
            <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2" : "grid-cols-1"}`}>
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;