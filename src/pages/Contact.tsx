import Navigation from "@/components/Navigation";
import { Phone, Mail, MessageCircle, Facebook, Instagram, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-fire">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="h-8 w-8 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            We're here to serve you. Reach out anytime!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call us for orders or inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+37360000000"
                  className="text-lg font-semibold text-primary hover:text-accent transition-colors"
                >
                  +373 60 000 000
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Available during opening hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>Send us a message anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:info@autogrill.md"
                  className="text-lg font-semibold text-primary hover:text-accent transition-colors break-all"
                >
                  info@autogrill.md
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Hours</CardTitle>
                <CardDescription>When we're open</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mon-Fri:</span>
                    <span className="font-semibold">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sat-Sun:</span>
                    <span className="font-semibold">9:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Follow Us on Social Media</CardTitle>
              <CardDescription className="text-base">
                Stay updated with our latest dishes, special offers, and events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-20 h-20 bg-gradient-fire rounded-full flex items-center justify-center shadow-warm hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Facebook className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-center mt-2 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    Facebook
                  </p>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-20 h-20 bg-gradient-fire rounded-full flex items-center justify-center shadow-warm hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Instagram className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-center mt-2 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    Instagram
                  </p>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Visit?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop by for a delicious meal or call ahead for takeaway orders
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:+37360000000">
              <button className="bg-gradient-fire text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </button>
            </a>
            <a href="/location">
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-warm transition-all duration-300 hover:scale-105">
                View Location
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
