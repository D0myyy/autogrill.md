import Navigation from "@/components/Navigation";
import { Camera } from "lucide-react";
import burgerImg from "@/assets/burger.jpg";
import kebabsImg from "@/assets/kebabs.jpg";
import steakImg from "@/assets/steak.jpg";
import friesImg from "@/assets/fries.jpg";
import mixedGrillImg from "@/assets/mixed-grill.jpg";
import heroImg from "@/assets/hero-bg.jpg";

const Gallery = () => {
  const images = [
    { src: heroImg, alt: "Autogrill MD Restaurant Exterior", category: "Location" },
    { src: burgerImg, alt: "Juicy Grilled Burger", category: "Burgers" },
    { src: kebabsImg, alt: "Traditional Kebabs", category: "Grills" },
    { src: steakImg, alt: "Premium Steak", category: "Steaks" },
    { src: mixedGrillImg, alt: "Mixed Grill Platter", category: "Platters" },
    { src: friesImg, alt: "Crispy French Fries", category: "Sides" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-fire">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="h-8 w-8 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Gallery</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            A taste of what awaits you at Autogrill MD
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-warm transition-all duration-300 aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Follow Us</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated with our latest dishes and special offers on social media
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-fire text-white px-6 py-3 rounded-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-fire text-white px-6 py-3 rounded-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
