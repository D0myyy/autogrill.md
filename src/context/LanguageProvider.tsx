import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "@/lib/translations";

type Lang = "ro" | "ru" | "en";

interface ILangContext {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<ILangContext>({
  lang: "ro",
  setLang: () => {},
  t: (k: string) => k,
});

export const useLang = () => useContext(LangContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>("ro");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ro" || saved === "ru" || saved === "en") setLangState(saved);
    } catch (e) {
      // ignore
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch (e) {
      // ignore
    }
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = (key: string) => {
    return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
};

export default LanguageProvider;
