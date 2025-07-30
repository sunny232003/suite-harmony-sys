import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Wifi, Car, Coffee, Utensils, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GuestPortal = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  // Mock room data
  const rooms = [
    {
      id: 1,
      type: "Standard Room",
      price: 150,
      capacity: 2,
      amenities: ["Wi-Fi", "AC", "TV", "Mini Bar"],
      available: true,
      image: "Standard room with comfortable bed"
    },
    {
      id: 2,
      type: "Deluxe Suite",
      price: 280,
      capacity: 4,
      amenities: ["Wi-Fi", "AC", "TV", "Mini Bar", "Balcony", "Room Service"],
      available: true,
      image: "Luxury suite with panoramic view"
    },
    {
      id: 3,
      type: "Presidential Suite",
      price: 500,
      capacity: 6,
      amenities: ["Wi-Fi", "AC", "TV", "Mini Bar", "Balcony", "Room Service", "Butler", "Jacuzzi"],
      available: false,
      image: "Premium presidential suite"
    },
  ];

  const amenityIcons = {
    "Wi-Fi": Wifi,
    "AC": Coffee,
    "TV": Coffee,
    "Mini Bar": Coffee,
    "Balcony": Coffee,
    "Room Service": Utensils,
    "Butler": Users,
    "Jacuzzi": Coffee,
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
          <h1 className="text-3xl font-bold text-foreground">Guest Portal</h1>
          <div /> {/* Spacer */}
        </div>

        {/* Search Section */}
        <Card className="mb-8 shadow-luxury">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Find Your Perfect Room
            </CardTitle>
            <CardDescription>
              Search for available rooms based on your preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="checkin">Check-in Date</Label>
                <Input
                  id="checkin"
                  type="date"
                  value={searchParams.checkIn}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, checkIn: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="checkout">Check-out Date</Label>
                <Input
                  id="checkout"
                  type="date"
                  value={searchParams.checkOut}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, checkOut: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={searchParams.guests}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                />
              </div>
              <div className="flex items-end">
                <Button variant="luxury" className="w-full">
                  Search Rooms
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Rooms */}
        <div className="grid lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <Card key={room.id} className={`${room.available ? "hover:shadow-luxury" : "opacity-75"} transition-all duration-300`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{room.type}</CardTitle>
                    <CardDescription>Up to {room.capacity} guests</CardDescription>
                  </div>
                  <Badge variant={room.available ? "default" : "secondary"}>
                    {room.available ? "Available" : "Occupied"}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-hotel-gold">
                  ${room.price}
                  <span className="text-sm font-normal text-muted-foreground"> / night</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => {
                        const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || Coffee;
                        return (
                          <Badge key={amenity} variant="outline" className="flex items-center gap-1">
                            <Icon className="h-3 w-3" />
                            {amenity}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                  <Button 
                    variant={room.available ? "gold" : "secondary"} 
                    className="w-full"
                    disabled={!room.available}
                  >
                    {room.available ? "Book Now" : "Not Available"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <Card className="mt-8 shadow-luxury">
          <CardHeader>
            <CardTitle>Additional Services</CardTitle>
            <CardDescription>
              Enhance your stay with our premium services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Car className="h-6 w-6 text-hotel-gold" />
                <div>
                  <h4 className="font-semibold">Valet Parking</h4>
                  <p className="text-sm text-muted-foreground">$25/night</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Utensils className="h-6 w-6 text-hotel-gold" />
                <div>
                  <h4 className="font-semibold">Room Service</h4>
                  <p className="text-sm text-muted-foreground">24/7 Available</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Coffee className="h-6 w-6 text-hotel-gold" />
                <div>
                  <h4 className="font-semibold">Spa Services</h4>
                  <p className="text-sm text-muted-foreground">From $80</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GuestPortal;