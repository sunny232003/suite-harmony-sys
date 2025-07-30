import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoleSelector = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: "guest",
      title: "Guest Portal",
      description: "Browse rooms, make reservations, and request services",
      icon: Users,
      path: "/guest",
      variant: "elegant" as const,
    },
    {
      id: "staff",
      title: "Staff Dashboard",
      description: "Manage rooms, check-ins, housekeeping, and guest services",
      icon: UserCheck,
      path: "/staff",
      variant: "luxury" as const,
    },
    {
      id: "admin",
      title: "Admin Analytics",
      description: "View occupancy rates, revenue tracking, and reports",
      icon: BarChart3,
      path: "/admin",
      variant: "gold" as const,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Hotel Management System
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose your portal to access the appropriate tools and features for your role
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <Card 
              key={role.id} 
              className="hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-warm rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant={role.variant}
                  className="w-full"
                  onClick={() => navigate(role.path)}
                >
                  Access {role.title}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RoleSelector;