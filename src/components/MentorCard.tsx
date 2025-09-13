import { Star, ShieldCheck, Award, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MentorCardProps {
  mentor: {
    id: string;
    name: string;
    avatar?: string;
    university: string;
    year: string;
    skills: string[];
    rating: number;
    reviewCount: number;
    hourlyRate: number;
    isVerified: boolean;
    reputationLevel: "gold" | "silver" | "bronze";
    completedTasks: number;
  };
}

const MentorCard = ({ mentor }: MentorCardProps) => {
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
    <Card className="group hover:shadow-floating transition-all duration-500 cursor-pointer glass-morphism border-0 hover-lift overflow-hidden">
      <CardContent className="p-8 relative">
        <div className="flex items-start space-x-4">
          {/* Avatar & Verification */}
          <div className="relative">
            <Avatar className="h-16 w-16">
              <AvatarImage src={mentor.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {mentor.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            {mentor.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-verified text-white rounded-full p-1">
                <ShieldCheck className="h-3 w-3" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            {/* Name & Reputation */}
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold text-lg truncate">{mentor.name}</h3>
              <Award className={`h-4 w-4 ${getReputationColor(mentor.reputationLevel)}`} />
            </div>

            {/* University & Year */}
            <p className="text-sm text-muted-foreground mb-3">
              {mentor.university} • {mentor.year}
            </p>

            {/* Rating & Stats */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium">{mentor.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({mentor.reviewCount})
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {mentor.completedTasks} tasks completed
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {mentor.skills.slice(0, 3).map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-skill-badge text-primary text-xs"
                >
                  {skill}
                </Badge>
              ))}
              {mentor.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{mentor.skills.length - 3} more
                </Badge>
              )}
            </div>

            {/* Rate & CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <IndianRupee className="h-4 w-4 text-secondary" />
                <span className="font-semibold text-secondary">
                  {mentor.hourlyRate}
                </span>
                <span className="text-sm text-muted-foreground">/hour</span>
              </div>
              
              <Button 
                size="sm" 
                className="bg-gradient-primary hover:opacity-90 shadow-glow hover:shadow-neon transition-all duration-300 hover:scale-105"
                onClick={() => {
                  // Add toast notification
                  import("@/hooks/use-toast").then(({ toast }) => {
                    toast({
                      title: "Connection Initiated",
                      description: `Sent a connection request to ${mentor.name}`,
                    });
                  });
                }}
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MentorCard;