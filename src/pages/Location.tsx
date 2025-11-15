import Navigation from "@/components/Navigation";
import { MapPin, Clock, Navigation2, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Location = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-fire">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="h-8 w-8 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Find Us</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Easy to find, easy to park, easy to enjoy
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-lg font-semibold text-foreground">Autogrill MD</p>
                <p className="text-muted-foreground">str. Păcii 21</p>
                <p className="text-muted-foreground">Stăuceni, Chișinău</p>
                <p className="text-muted-foreground">Moldova</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Clock className="h-6 w-6 text-primary" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold text-foreground">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Saturday - Sunday</span>
                  <span className="font-semibold text-foreground">9:00 AM - 11:00 PM</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">Open every day of the year</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="overflow-hidden shadow-xl border-2">
            <CardHeader className="bg-muted">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Navigation2 className="h-6 w-6 text-primary" />
                Get Directions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8!2d28.8!3d47.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAxJzQ4LjAiTiAyOMKwNDgnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Autogrill MD Location"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">How to Get Here</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                  <Navigation2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle>From Chișinău Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Take strada Păcii north towards Stăuceni. 10 minutes drive.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Easy Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ample parking space available right next to the restaurant.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Call us for directions or any questions about your visit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
