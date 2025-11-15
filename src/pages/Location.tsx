import Navigation from "@/components/Navigation";
import { MapPin, Clock, Navigation2, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/context/LanguageProvider";

const Location = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-fire">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="h-8 w-8 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">{t("index.find_us")}</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">{t("location.subtitle")}</p>
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
                  {t("location.address")}
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
                  {t("location.opening_hours")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t("hours.mon_fri")}</span>
                  <span className="font-semibold text-foreground">{t("hours.weekday_time")}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t("hours.sat_sun")}</span>
                  <span className="font-semibold text-foreground">{t("hours.weekend_time")}</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">{t("open.everyday")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="overflow-hidden shadow-xl border-2">
            <CardHeader className="bg-muted">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Navigation2 className="h-6 w-6 text-primary" />
                {t("index.get_directions")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps?q=47.0911377,28.8632363&z=20&output=embed"
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
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t("directions.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                  <Navigation2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle>{t("directions.from_center")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("directions.from_center.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle>{t("directions.parking")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("directions.parking.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-warm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle>{t("directions.need_help")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("directions.need_help.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
