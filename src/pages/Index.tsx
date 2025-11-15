import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Clock, MapPin, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-bg.jpg";
import burgerImg from "@/assets/burger.jpg";
import kebabsImg from "@/assets/kebabs.jpg";
import steakImg from "@/assets/steak.jpg";
import { useLang } from "@/context/LanguageProvider";

const Index = () => {
  const { t } = useLang();

  const features = [
    {
      icon: Flame,
      title: t("index.features.fresh.title"),
      description: t("index.features.fresh.desc"),
    },
    {
      icon: Clock,
      title: t("index.features.fast.title"),
      description: t("index.features.fast.desc"),
    },
    {
      icon: MapPin,
      title: t("index.features.access.title"),
      description: t("index.features.access.desc"),
    },
    {
      icon: Utensils,
      title: t("index.features.quality.title"),
      description: t("index.features.quality.desc"),
    },
  ];

  const highlights = [
    {
      image: burgerImg,
      title: t("highlight.burgers.title"),
      description: t("highlight.burgers.desc"),
    },
    {
      image: kebabsImg,
      title: t("highlight.kebabs.title"),
      description: t("highlight.kebabs.desc"),
    },
    {
      image: steakImg,
      title: t("highlight.steak.title"),
      description: t("highlight.steak.desc"),
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
            <h1 className="text-5xl md:text-7xl font-bold text-white">{t("index.site_name")}</h1>
            <Flame className="h-12 w-12 text-primary animate-pulse" />
          </div>
          <p className="text-xl md:text-3xl text-white mb-4 font-semibold">{t("index.hero_tagline")}</p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">{t("index.hero_sub")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/menu">
                <Button
                size="lg"
                className="bg-gradient-fire text-white px-8 py-6 text-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                {t("index.view_menu")}
              </Button>
            </Link>
            <Link to="/location">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-warm transition-all duration-300 hover:scale-105"
              >
                {t("index.find_us")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">{t("index.why_title")}</h2>
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
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">{t("index.specialties")}</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">{t("index.discover")}</p>
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
                {t("index.see_full_menu")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20 bg-gradient-fire">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">{t("index.visit_today")}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{t("index.located_at")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/location">
                <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-warm transition-all duration-300 hover:scale-105"
              >
                <MapPin className="mr-2 h-5 w-5" />
                {t("index.get_directions")}
              </Button>
            </Link>
            <a href="tel:+37369310750">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-warm transition-all duration-300 hover:scale-105"
              >
                {t("index.call_now")}
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
            <h3 className="text-2xl font-bold">{t("index.site_name")}</h3>
          </div>
          <p className="text-sm mb-4">{t("footer.tagline")}</p>
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
