import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NotificationCenter from "@/components/NotificationCenter";
import UserMenu from "@/components/UserMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass-morphism border-b border-primary/20 shadow-glow">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-neon group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary-foreground font-bold text-xl">C</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
            CampusMate
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
              placeholder="Search mentors, skills, or tasks..."
              className="pl-12 pr-4 h-12 bg-gradient-glass border-0 shadow-card focus-visible:shadow-hover transition-all duration-300 text-base"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:flex glass-morphism hover:shadow-hover transition-all duration-300 hover-lift"
          >
            <Plus className="h-4 w-4 mr-2" />
            Post Task
          </Button>
          
          <NotificationCenter />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;