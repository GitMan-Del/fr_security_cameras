"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type LanguageContextType = {
  translate: boolean;
  setTranslate: (value: boolean) => void;
  toggleTranslate: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [translate, setTranslate] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;

    const saved = localStorage.getItem("lang");
    if (saved === "en") return true;
    if (saved === "fr") return false;

    const browserLang = navigator.language;
    const isFrench = browserLang.startsWith("fr");
    const defaultLang = !isFrench;
    localStorage.setItem("lang", defaultLang ? "en" : "fr");
    return defaultLang;
  });

  // Doar sincronizăm cu localStorage la schimbare
  useEffect(() => {
    localStorage.setItem("lang", translate ? "en" : "fr");
  }, [translate]);

  const toggleTranslate = () => setTranslate((prev) => !prev);

  return (
    <LanguageContext.Provider
      value={{ translate, setTranslate, toggleTranslate }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
