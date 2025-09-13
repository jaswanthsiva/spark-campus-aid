import { Search, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-mesh-pattern"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-light/30 rounded-full blur-lg float" style={{animationDelay: '2s'}}></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 animate-slide-in">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Find Your Perfect
                <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent shimmer">
                  Campus Mentor
                </span>
              </h1>
              <p className="text-2xl text-primary-foreground/90 max-w-lg leading-relaxed">
                Connect with skilled peers for assignments, projects, interview prep, and mentorship. 
                <span className="block mt-2 font-semibold text-accent">Earn while you help others succeed.</span>
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="glass-morphism p-8 rounded-3xl border border-primary-foreground/30 shadow-glow hover-lift">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative group">
                  <Search className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <Input
                    placeholder="Search for skills, subjects, or help..."
                    className="pl-14 h-16 text-lg bg-background/80 border-primary-foreground/20 text-foreground focus-visible:shadow-neon transition-all duration-300"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="h-16 px-10 bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold text-lg shadow-neon hover:shadow-floating transition-all duration-300 hover:scale-105"
                >
                  Find Mentors
                </Button>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center mb-4 relative">
                  <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 pulse-glow">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">500+</div>
                <div className="text-lg text-primary-foreground/80 font-medium">Active Mentors</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center mb-4 relative">
                  <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 pulse-glow" style={{animationDelay: '0.5s'}}>
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">2000+</div>
                <div className="text-lg text-primary-foreground/80 font-medium">Tasks Completed</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center mb-4 relative">
                  <div className="h-16 w-16 bg-primary-light/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 pulse-glow" style={{animationDelay: '1s'}}>
                    <Shield className="h-8 w-8 text-primary-light" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-light to-primary-glow bg-clip-text text-transparent">100%</div>
                <div className="text-lg text-primary-foreground/80 font-medium">Verified Students</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative rounded-3xl overflow-hidden shadow-floating hover-lift">
              <img 
                src={heroImage} 
                alt="Students collaborating and mentoring each other"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/10"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-8 right-8 glass-morphism p-4 rounded-xl float">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary-foreground">Live: 127 mentors</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 glass-morphism p-4 rounded-xl float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 bg-gradient-primary rounded-full border-2 border-white"></div>
                    <div className="h-8 w-8 bg-gradient-secondary rounded-full border-2 border-white"></div>
                    <div className="h-8 w-8 bg-gradient-accent rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-accent-foreground">+</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-primary-foreground">Join 2000+ students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;