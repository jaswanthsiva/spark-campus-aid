import { Clock, IndianRupee, User, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    description: string;
    category: string;
    budget: number;
    deadline: string;
    postedBy: string;
    timeAgo: string;
    urgency: "low" | "medium" | "high";
    skillsRequired: string[];
  };
}

const TaskCard = ({ task }: TaskCardProps) => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-accent text-accent-foreground";
      case "low":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{task.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
          </div>
          <Badge className={`ml-4 capitalize ${getUrgencyColor(task.urgency)}`}>
            {task.urgency}
          </Badge>
        </div>

        {/* Skills Required */}
        <div className="flex flex-wrap gap-2 mb-4">
          {task.skillsRequired.map((skill) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="text-xs border-primary/20 text-primary"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Task Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <IndianRupee className="h-4 w-4 text-secondary" />
              <span className="font-semibold text-secondary">{task.budget}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{task.deadline}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{task.postedBy}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{task.timeAgo}</span>
            </div>
          </div>
        </div>

        {/* Category & CTA */}
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-muted">
            {task.category}
          </Badge>
          
          <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;