import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  BarChart3,
  PieChart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminAnalytics = () => {
  const navigate = useNavigate();

  // Mock analytics data
  const monthlyStats = {
    occupancyRate: 78,
    totalRevenue: 125400,
    avgRoomRate: 265,
    totalGuests: 842,
    revenueGrowth: 15.2,
    occupancyGrowth: 8.7
  };

  const roomTypePerformance = [
    { type: "Standard", occupancy: 85, revenue: 45200, avgRate: 150 },
    { type: "Deluxe", occupancy: 76, revenue: 52800, avgRate: 280 },
    { type: "Suite", occupancy: 65, revenue: 27400, avgRate: 420 },
  ];

  const weeklyOccupancy = [
    { day: "Mon", rate: 72 },
    { day: "Tue", rate: 68 },
    { day: "Wed", rate: 74 },
    { day: "Thu", rate: 82 },
    { day: "Fri", rate: 91 },
    { day: "Sat", rate: 95 },
    { day: "Sun", rate: 88 },
  ];

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
          <h1 className="text-3xl font-bold text-foreground">Admin Analytics</h1>
          <div className="text-sm text-muted-foreground">
            January 2024
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-luxury">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-luxury rounded-full">
                  <BarChart3 className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{monthlyStats.occupancyRate}%</p>
                  <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-500">+{monthlyStats.occupancyGrowth}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-luxury">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-gold rounded-full">
                  <DollarSign className="h-6 w-6 text-hotel-gold-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">${monthlyStats.totalRevenue.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-500">+{monthlyStats.revenueGrowth}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-luxury">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary rounded-full">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">${monthlyStats.avgRoomRate}</p>
                  <p className="text-sm text-muted-foreground">Avg Room Rate</p>
                  <p className="text-xs text-muted-foreground mt-1">Per night</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-luxury">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{monthlyStats.totalGuests}</p>
                  <p className="text-sm text-muted-foreground">Total Guests</p>
                  <p className="text-xs text-muted-foreground mt-1">This month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Weekly Occupancy Trend */}
          <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Weekly Occupancy Trend
              </CardTitle>
              <CardDescription>Daily occupancy rates for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyOccupancy.map((day) => (
                  <div key={day.day} className="flex items-center gap-4">
                    <div className="w-12 text-sm font-medium">{day.day}</div>
                    <div className="flex-1">
                      <div className="bg-secondary rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-luxury h-full transition-all duration-500"
                          style={{ width: `${day.rate}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-sm font-medium w-12 text-right">{day.rate}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Room Type Performance */}
          <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Room Type Performance
              </CardTitle>
              <CardDescription>Revenue and occupancy by room category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roomTypePerformance.map((room) => (
                  <div key={room.type} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{room.type} Room</h4>
                      <Badge variant="outline">{room.occupancy}% occupied</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Revenue</p>
                        <p className="font-semibold text-hotel-gold">${room.revenue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Avg Rate</p>
                        <p className="font-semibold">${room.avgRate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle>Top Revenue Days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Saturday</span>
                  <span className="font-semibold text-hotel-gold">$8,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Friday</span>
                  <span className="font-semibold text-hotel-gold">$7,890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Thursday</span>
                  <span className="font-semibold text-hotel-gold">$6,230</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle>Guest Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-hotel-gold mb-2">4.7</div>
                <div className="text-sm text-muted-foreground mb-4">out of 5.0</div>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div 
                      key={star} 
                      className={`w-4 h-4 rounded-full ${star <= 4 ? 'bg-hotel-gold' : 'bg-muted'}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Based on 342 reviews</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle>Revenue Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Next Month</span>
                  <span className="font-semibold text-green-600">$142K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Growth Trend</span>
                  <span className="font-semibold text-green-600">+18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Target</span>
                  <span className="font-semibold">$135K</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;