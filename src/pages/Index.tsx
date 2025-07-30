import heroImage from "@/assets/hotel-hero.jpg";
import RoleSelector from "@/components/RoleSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Luxury hotel lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-luxury opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Grandview Hotel
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Excellence in Hospitality Management
            </p>
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <RoleSelector />
    </div>
  );
};

export default Index;
