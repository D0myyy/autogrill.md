import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame } from "lucide-react";
import burgerImg from "@/assets/burger.jpg";
import kebabsImg from "@/assets/kebabs.jpg";
import steakImg from "@/assets/steak.jpg";
import friesImg from "@/assets/fries.jpg";
import mixedGrillImg from "@/assets/mixed-grill.jpg";

const Menu = () => {
  const menuCategories = [
    {
      title: "Burgers",
      description: "Freshly grilled, juicy burgers",
      image: burgerImg,
      items: [
        { name: "Classic Burger", description: "Beef patty, lettuce, tomato, onion", price: "45 MDL" },
        { name: "Cheese Burger", description: "Beef patty with melted cheese", price: "50 MDL" },
        { name: "Double Burger", description: "Two beef patties, double cheese", price: "70 MDL" },
        { name: "Chicken Burger", description: "Grilled chicken breast", price: "48 MDL" },
      ],
    },
    {
      title: "Kebabs & Skewers",
      description: "Traditional grilled perfection",
      image: kebabsImg,
      items: [
        { name: "Pork Kebab", description: "Marinated pork skewers", price: "55 MDL" },
        { name: "Chicken Kebab", description: "Tender chicken pieces", price: "52 MDL" },
        { name: "Mixed Kebab", description: "Pork and chicken combo", price: "60 MDL" },
        { name: "Lamb Kebab", description: "Premium lamb cuts", price: "75 MDL" },
      ],
    },
    {
      title: "Steaks & Grills",
      description: "Premium cuts, expertly grilled",
      image: steakImg,
      items: [
        { name: "Pork Steak", description: "200g premium cut", price: "80 MDL" },
        { name: "Chicken Steak", description: "Grilled chicken breast", price: "70 MDL" },
        { name: "Mixed Grill", description: "Assorted meats platter", price: "120 MDL" },
        { name: "Ribs", description: "BBQ glazed pork ribs", price: "95 MDL" },
      ],
    },
    {
      title: "Sides",
      description: "Perfect companions",
      image: friesImg,
      items: [
        { name: "French Fries", description: "Crispy golden fries", price: "25 MDL" },
        { name: "Grilled Vegetables", description: "Seasonal mix", price: "30 MDL" },
        { name: "Coleslaw", description: "Fresh cabbage salad", price: "20 MDL" },
        { name: "Garlic Bread", description: "Toasted with butter", price: "22 MDL" },
      ],
    },
    {
      title: "Drinks",
      description: "Refresh and enjoy",
      image: mixedGrillImg,
      items: [
        { name: "Soft Drinks", description: "Coca-Cola, Fanta, Sprite", price: "15 MDL" },
        { name: "Water", description: "Still or sparkling", price: "10 MDL" },
        { name: "Fresh Juice", description: "Orange or apple", price: "25 MDL" },
        { name: "Coffee", description: "Espresso, Americano", price: "18 MDL" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-fire">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flame className="h-8 w-8 text-white animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Our Menu</h1>
            <Flame className="h-8 w-8 text-white animate-pulse" />
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Fresh grilled food made with quality ingredients, served fast and delicious
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {menuCategories.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-20 h-20 rounded-full object-cover shadow-warm border-4 border-primary"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <Card key={itemIdx} className="hover:shadow-warm transition-all duration-300 border-2 hover:border-primary">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <span className="text-2xl font-bold text-primary">{item.price}</span>
                        </div>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Order?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit us at str. Păcii 21, Stăuceni or call ahead for takeaway
          </p>
          <a href="tel:+37360000000">
            <button className="bg-gradient-fire text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105">
              Call to Order
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;
