import { Search, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Campus Mentor
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-lg">
                Connect with skilled peers for assignments, projects, interview prep, and mentorship. 
                Earn while you help others succeed.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-background/10 backdrop-blur-sm p-6 rounded-2xl border border-primary-foreground/20">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search for skills, subjects, or help..."
                    className="pl-12 h-12 bg-background border-0 text-foreground"
                  />
                </div>
                <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
                  Find Mentors
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-primary-foreground/70">Active Mentors</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold">2000+</div>
                <div className="text-sm text-primary-foreground/70">Tasks Completed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-accent-light" />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-primary-foreground/70">Verified Students</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Students collaborating and mentoring each other"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;