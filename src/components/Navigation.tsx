import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flame, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLang } from "@/context/LanguageProvider";
import { useTheme } from "@/context/ThemeProvider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { key: "home", path: "/" },
    { key: "menu", path: "/menu" },
    { key: "gallery", path: "/gallery" },
    { key: "location", path: "/location" },
    { key: "contact", path: "/contact" },
  ];

  const { lang, setLang, t } = useLang();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-fire p-2 rounded-lg shadow-warm transition-all duration-300 group-hover:scale-110">
              <Flame className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Autogrill MD</span>
              <span className="text-xs text-muted-foreground">Stăuceni</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={cn(
                      "transition-all duration-300 text-sm",
                      isActive(item.path) && "bg-primary text-primary-foreground shadow-warm"
                    )}
                  >
                    {t(`nav.${item.key}`)}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side (theme toggle, language buttons, mobile menu) */}
          <div className="flex items-center gap-2">
            {/* Desktop language selector */}
            <div className="hidden md:flex items-center gap-1">
              <Button
                size="sm"
                variant={lang === "ro" ? "default" : "ghost"}
                onClick={() => setLang("ro")}
                title="Română"
                aria-pressed={lang === "ro"}
                className="h-8 w-8 px-2 text-xs"
              >
                RO
              </Button>
              <Button
                size="sm"
                variant={lang === "ru" ? "default" : "ghost"}
                onClick={() => setLang("ru")}
                title="Русский"
                aria-pressed={lang === "ru"}
                className="h-8 w-8 px-2 text-xs"
              >
                RU
              </Button>
              <Button
                size="sm"
                variant={lang === "en" ? "default" : "ghost"}
                onClick={() => setLang("en")}
                title="English"
                aria-pressed={lang === "en"}
                className="h-8 w-8 px-2 text-xs"
              >
                EN
              </Button>
            </div>

            {/* Theme Toggle Button - Far Right on Desktop */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:block p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>

            {/* Mobile language button: small, cycles on click */}
            <button
              className="md:hidden p-1 rounded-md hover:bg-muted transition-colors text-sm w-9 h-9 flex items-center justify-center"
              onClick={() => {
                const next = lang === "ro" ? "ru" : lang === "ru" ? "en" : "ro";
                setLang(next as "ro" | "ru" | "en");
              }}
              aria-label={`Change language, current ${lang}`}
              title="Change language"
            >
              {lang.toUpperCase()}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start transition-all duration-300",
                      isActive(item.path) && "bg-primary text-primary-foreground shadow-warm"
                    )}
                  >
                    {t(`nav.${item.key}`)}
                  </Button>
                </Link>
              ))}
            </div>
              {/* Mobile language options inside menu */}
              <div className="pt-2 border-t border-border flex items-center gap-2">
                <Button size="sm" variant={lang === "ro" ? "default" : "ghost"} onClick={() => setLang("ro")} className="w-full">
                  RO — Română
                </Button>
                <Button size="sm" variant={lang === "ru" ? "default" : "ghost"} onClick={() => setLang("ru")} className="w-full">
                  RU — Русский
                </Button>
                <Button size="sm" variant={lang === "en" ? "default" : "ghost"} onClick={() => setLang("en")} className="w-full">
                  EN — English
                </Button>
              </div>
              {/* Mobile theme toggle */}
              <div className="pt-2 border-t border-border">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
