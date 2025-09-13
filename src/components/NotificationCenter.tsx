import { useState } from "react";
import { 
  Bell, 
  MessageCircle, 
  UserPlus, 
  DollarSign, 
  CheckCircle,
  Clock,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NotificationCenter = () => {
  const [notifications] = useState([
    {
      id: "1",
      type: "message",
      title: "New Message",
      content: "Priya Sharma sent you a message about the React project",
      avatar: "/api/placeholder/32/32",
      time: "2 min ago",
      unread: true
    },
    {
      id: "2", 
      type: "task_completed",
      title: "Task Completed",
      content: "Your machine learning assignment has been marked as complete",
      time: "1 hour ago",
      unread: true
    },
    {
      id: "3",
      type: "payment",
      title: "Payment Received",
      content: "₹2,500 received for React component help",
      time: "2 hours ago",
      unread: false
    },
    {
      id: "4",
      type: "new_mentor",
      title: "New Mentor Application",
      content: "Arjun Patel wants to connect with you",
      avatar: "/api/placeholder/32/32",
      time: "3 hours ago",
      unread: false
    },
    {
      id: "5",
      type: "review",
      title: "New Review",
      content: "You received a 5-star review from Sneha",
      time: "1 day ago",
      unread: false
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageCircle className="h-4 w-4 text-primary" />;
      case "task_completed":
        return <CheckCircle className="h-4 w-4 text-secondary" />;
      case "payment":
        return <DollarSign className="h-4 w-4 text-accent" />;
      case "new_mentor":
        return <UserPlus className="h-4 w-4 text-primary" />;
      case "review":
        return <Star className="h-4 w-4 text-accent" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover-lift glass-morphism"
        >
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center pulse-glow"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-96 p-0 glass-morphism border-0 shadow-floating" 
        align="end"
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg bg-gradient-text bg-clip-text text-transparent">
              Notifications
            </h3>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" className="text-xs">
                Mark all as read
              </Button>
            )}
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification, index) => (
            <div key={notification.id}>
              <div className={`p-4 hover:bg-muted/20 transition-colors cursor-pointer ${
                notification.unread ? 'bg-primary/5' : ''
              }`}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {notification.avatar ? (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={notification.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {notification.title.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        {getNotificationIcon(notification.type)}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {notification.content}
                    </p>
                    {notification.unread && (
                      <div className="mt-1">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {index < notifications.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <Button variant="outline" className="w-full">
            View All Notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;