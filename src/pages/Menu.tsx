import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame } from "lucide-react";
import burgerImg from "@/assets/burger.jpg";
import kebabsImg from "@/assets/kebabs.jpg";
import steakImg from "@/assets/steak.jpg";
import friesImg from "@/assets/fries.jpg";
import mixedGrillImg from "@/assets/mixed-grill.jpg";
import { useLang } from "@/context/LanguageProvider";

const Menu = () => {
  const { t } = useLang();

  const menuCategories = [
    {
      title: t("menu.category.burgers.title"),
      description: t("menu.category.burgers.desc"),
      image: burgerImg,
      items: [
        { name: t("menu.item.classic_burger.name"), description: t("menu.item.classic_burger.desc"), price: "45 MDL" },
        { name: t("menu.item.cheese_burger.name"), description: t("menu.item.cheese_burger.desc"), price: "50 MDL" },
        { name: t("menu.item.double_burger.name"), description: t("menu.item.double_burger.desc"), price: "70 MDL" },
        { name: t("menu.item.chicken_burger.name"), description: t("menu.item.chicken_burger.desc"), price: "48 MDL" },
      ],
    },
    {
      title: t("menu.category.kebabs.title"),
      description: t("menu.category.kebabs.desc"),
      image: kebabsImg,
      items: [
        { name: t("menu.item.pork_kebab.name"), description: t("menu.item.pork_kebab.desc"), price: "55 MDL" },
        { name: t("menu.item.chicken_kebab.name"), description: t("menu.item.chicken_kebab.desc"), price: "52 MDL" },
        { name: t("menu.item.mixed_kebab.name"), description: t("menu.item.mixed_kebab.desc"), price: "60 MDL" },
        { name: t("menu.item.lamb_kebab.name"), description: t("menu.item.lamb_kebab.desc"), price: "75 MDL" },
      ],
    },
    {
      title: t("menu.category.steaks.title"),
      description: t("menu.category.steaks.desc"),
      image: steakImg,
      items: [
        { name: t("menu.item.pork_steak.name"), description: t("menu.item.pork_steak.desc"), price: "80 MDL" },
        { name: t("menu.item.chicken_steak.name"), description: t("menu.item.chicken_steak.desc"), price: "70 MDL" },
        { name: t("menu.item.mixed_grill.name"), description: t("menu.item.mixed_grill.desc"), price: "120 MDL" },
        { name: t("menu.item.ribs.name"), description: t("menu.item.ribs.desc"), price: "95 MDL" },
      ],
    },
    {
      title: t("menu.category.sides.title"),
      description: t("menu.category.sides.desc"),
      image: friesImg,
      items: [
        { name: t("menu.item.fries.name"), description: t("menu.item.fries.desc"), price: "25 MDL" },
        { name: t("menu.item.veg.name"), description: t("menu.item.veg.desc"), price: "30 MDL" },
        { name: t("menu.item.coleslaw.name"), description: t("menu.item.coleslaw.desc"), price: "20 MDL" },
        { name: t("menu.item.garlic_bread.name"), description: t("menu.item.garlic_bread.desc"), price: "22 MDL" },
      ],
    },
    {
      title: t("menu.category.drinks.title"),
      description: t("menu.category.drinks.desc"),
      image: mixedGrillImg,
      items: [
        { name: t("menu.item.soft_drinks.name"), description: t("menu.item.soft_drinks.desc"), price: "15 MDL" },
        { name: t("menu.item.water.name"), description: t("menu.item.water.desc"), price: "10 MDL" },
        { name: t("menu.item.juice.name"), description: t("menu.item.juice.desc"), price: "25 MDL" },
        { name: t("menu.item.coffee.name"), description: t("menu.item.coffee.desc"), price: "18 MDL" },
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">{t("menu.title")}</h1>
            <Flame className="h-8 w-8 text-white animate-pulse" />
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">{t("menu.description")}</p>
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
          <h2 className="text-3xl font-bold mb-4 text-foreground">{t("menu.ready_order")}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t("menu.visit_or_call")}</p>
          <a href="tel:+37369310750">
            <button className="bg-gradient-fire text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105">
              {t("menu.call_to_order")}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;
