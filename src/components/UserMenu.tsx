import { useState } from "react";
import { 
  User, 
  Settings, 
  CreditCard, 
  HelpCircle, 
  LogOut, 
  Badge,
  Star,
  Trophy,
  Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge as UIBadge } from "@/components/ui/badge";

const UserMenu = () => {
  // Mock user data
  const user = {
    name: "Alex Kumar",
    email: "alex@university.edu",
    avatar: "/api/placeholder/40/40",
    university: "IIT Delhi",
    year: "3rd Year CSE",
    rating: 4.8,
    earnings: 15000,
    tasksCompleted: 23,
    isVerified: true,
    reputationLevel: "gold" as const
  };

  const getReputationColor = (level: string) => {
    switch (level) {
      case "gold":
        return "text-reputation-gold";
      case "silver":
        return "text-reputation-silver";
      case "bronze":
        return "text-reputation-bronze";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="relative h-10 w-10 rounded-full hover-lift glass-morphism"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground">
              {user.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          {user.isVerified && (
            <div className="absolute -bottom-1 -right-1 bg-verified text-white rounded-full p-1">
              <Badge className="h-3 w-3" />
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-80 glass-morphism border-0 shadow-floating" 
        align="end"
      >
        <DropdownMenuLabel className="p-4 pb-2">
          <div className="flex items-start space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                {user.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-sm">{user.name}</p>
                <Trophy className={`h-4 w-4 ${getReputationColor(user.reputationLevel)}`} />
              </div>
              <p className="text-xs text-muted-foreground">{user.email}</p>
              <p className="text-xs text-muted-foreground">{user.university} • {user.year}</p>
              
              <div className="flex items-center space-x-3 mt-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="text-xs font-medium">{user.rating}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {user.tasksCompleted} tasks
                </div>
                <UIBadge variant="secondary" className="text-xs">
                  ₹{user.earnings.toLocaleString()}
                </UIBadge>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <div className="p-2 space-y-1">
          <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 transition-colors">
            <User className="mr-2 h-4 w-4" />
            <span>My Profile</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 transition-colors">
            <Wallet className="mr-2 h-4 w-4" />
            <span>Earnings</span>
            <UIBadge variant="secondary" className="ml-auto">
              ₹{user.earnings.toLocaleString()}
            </UIBadge>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 transition-colors">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 transition-colors">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 transition-colors">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help & Support</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator />
        
        <div className="p-2">
          <DropdownMenuItem className="cursor-pointer hover:bg-destructive/10 transition-colors text-destructive focus:text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;