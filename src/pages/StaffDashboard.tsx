import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bed, 
  Users, 
  CheckCircle, 
  Clock, 
  Wrench, 
  DollarSign, 
  ArrowLeft,
  Calendar,
  UserCheck,
  UserX
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StaffDashboard = () => {
  const navigate = useNavigate();

  // Mock data
  const roomStatuses = [
    { room: "101", status: "occupied", guest: "John Smith", checkOut: "2024-01-15" },
    { room: "102", status: "cleaning", guest: null, checkOut: null },
    { room: "103", status: "available", guest: null, checkOut: null },
    { room: "104", status: "maintenance", guest: null, checkOut: null },
    { room: "105", status: "occupied", guest: "Sarah Johnson", checkOut: "2024-01-16" },
    { room: "201", status: "checkout", guest: "Mike Wilson", checkOut: "Today" },
  ];

  const checkInQueue = [
    { id: 1, guest: "Emma Davis", room: "103", time: "14:00", status: "waiting" },
    { id: 2, guest: "Robert Brown", room: "106", time: "15:30", status: "processing" },
    { id: 3, guest: "Lisa Garcia", room: "201", time: "16:00", status: "waiting" },
  ];

  const housekeepingTasks = [
    { room: "102", task: "Deep cleaning", priority: "high", assignee: "Maria" },
    { room: "104", task: "Maintenance repair", priority: "urgent", assignee: "Tom" },
    { room: "201", task: "Standard cleaning", priority: "medium", assignee: "Ana" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "occupied": return "default";
      case "available": return "outline";
      case "cleaning": return "secondary";
      case "maintenance": return "destructive";
      case "checkout": return "outline";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "occupied": return Users;
      case "available": return CheckCircle;
      case "cleaning": return Clock;
      case "maintenance": return Wrench;
      case "checkout": return UserX;
      default: return Bed;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "destructive";
      case "high": return "default";
      case "medium": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Staff Dashboard</h1>
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-luxury rounded-full">
                  <Bed className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-sm text-muted-foreground">Total Rooms</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-gold rounded-full">
                  <Users className="h-6 w-6 text-hotel-gold-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">18</p>
                  <p className="text-sm text-muted-foreground">Occupied</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Available</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <DollarSign className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">75%</p>
                  <p className="text-sm text-muted-foreground">Occupancy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="rooms" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="rooms">Room Status</TabsTrigger>
            <TabsTrigger value="checkin">Check-in Queue</TabsTrigger>
            <TabsTrigger value="housekeeping">Housekeeping</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="rooms">
            <Card>
              <CardHeader>
                <CardTitle>Room Status Overview</CardTitle>
                <CardDescription>Current status of all hotel rooms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {roomStatuses.map((room) => {
                    const StatusIcon = getStatusIcon(room.status);
                    return (
                      <Card key={room.room} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">Room {room.room}</h3>
                            <StatusIcon className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <Badge variant={getStatusColor(room.status)} className="mb-2">
                            {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                          </Badge>
                          {room.guest && (
                            <div className="text-sm">
                              <p className="font-medium">{room.guest}</p>
                              <p className="text-muted-foreground">Out: {room.checkOut}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="checkin">
            <Card>
              <CardHeader>
                <CardTitle>Check-in Queue</CardTitle>
                <CardDescription>Guests waiting to check in today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {checkInQueue.map((guest) => (
                    <div key={guest.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gradient-luxury rounded-full">
                          <UserCheck className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{guest.guest}</h4>
                          <p className="text-sm text-muted-foreground">Room {guest.room} • {guest.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={guest.status === "processing" ? "default" : "secondary"}>
                          {guest.status}
                        </Badge>
                        <Button variant="luxury" size="sm">
                          Process Check-in
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="housekeeping">
            <Card>
              <CardHeader>
                <CardTitle>Housekeeping Tasks</CardTitle>
                <CardDescription>Current cleaning and maintenance tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {housekeepingTasks.map((task, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gradient-gold rounded-full">
                          <Wrench className="h-4 w-4 text-hotel-gold-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Room {task.room}</h4>
                          <p className="text-sm text-muted-foreground">{task.task}</p>
                          <p className="text-sm text-muted-foreground">Assigned to: {task.assignee}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                        <Button variant="elegant" size="sm">
                          Mark Complete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Today's Billing Summary</CardTitle>
                <CardDescription>Revenue and payment tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-warm rounded-lg">
                      <h4 className="font-semibold mb-2">Today's Revenue</h4>
                      <p className="text-3xl font-bold text-hotel-gold">$4,250</p>
                      <p className="text-sm text-muted-foreground">+12% from yesterday</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Pending Payments</h4>
                      <p className="text-2xl font-bold">$890</p>
                      <p className="text-sm text-muted-foreground">3 outstanding bills</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Average Room Rate</h4>
                      <p className="text-2xl font-bold">$235</p>
                      <p className="text-sm text-muted-foreground">This month</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Check-outs Today</h4>
                      <p className="text-2xl font-bold">8</p>
                      <p className="text-sm text-muted-foreground">All processed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StaffDashboard;