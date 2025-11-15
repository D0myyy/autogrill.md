import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Clock, MapPin, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-bg.jpg";
import burgerImg from "@/assets/burger.jpg";
import kebabsImg from "@/assets/kebabs.jpg";
import steakImg from "@/assets/steak.jpg";

const Index = () => {
  const features = [
    {
      icon: Flame,
      title: "Fresh Grilled",
      description: "Everything cooked fresh on our grill, just the way you like it",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick meals for travelers and locals on the go",
    },
    {
      icon: MapPin,
      title: "Easy Access",
      description: "Conveniently located on str. Păcii 21, with ample parking",
    },
    {
      icon: Utensils,
      title: "Quality Food",
      description: "Premium ingredients, authentic flavors, affordable prices",
    },
  ];

  const highlights = [
    {
      image: burgerImg,
      title: "Juicy Burgers",
      description: "Freshly grilled beef patties with all your favorite toppings",
    },
    {
      image: kebabsImg,
      title: "Traditional Kebabs",
      description: "Marinated meat skewers, grilled to perfection",
    },
    {
      image: steakImg,
      title: "Premium Steaks",
      description: "High-quality cuts, expertly grilled with signature seasoning",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        >
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Autogrill MD
            </h1>
            <Flame className="h-12 w-12 text-primary animate-pulse" />
          </div>
          <p className="text-xl md:text-3xl text-white mb-4 font-semibold">
            Fresh Grilled Food on the Road
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your roadside destination for delicious grilled meals in Stăuceni
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/menu">
              <Button
                size="lg"
                className="bg-gradient-fire text-white px-8 py-6 text-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                View Menu
              </Button>
            </Link>
            <Link to="/location">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-warm transition-all duration-300 hover:scale-105"
              >
                Find Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Autogrill MD?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="text-center border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Our Specialties
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Discover our most popular dishes, grilled fresh daily
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-2 hover:border-primary transition-all duration-300 shadow-xl hover:shadow-warm group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button
                size="lg"
                className="bg-gradient-fire text-white px-8 py-6 text-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                See Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20 bg-gradient-fire">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Visit Us Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Located at str. Păcii 21, Stăuceni, Chișinău
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/location">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-warm transition-all duration-300 hover:scale-105"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </Link>
            <a href="tel:+37360000000">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-warm transition-all duration-300 hover:scale-105"
              >
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Autogrill MD</h3>
          </div>
          <p className="text-sm mb-4">
            Fresh grilled food • Stăuceni, Chișinău
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Autogrill MD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
