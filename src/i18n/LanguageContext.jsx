import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toCyrillic, stripTicks } from "./translit";

/**
 * Jezici:
 *  "sr-Cyrl" → srpski, ćirilica (podrazumevano)
 *  "sr-Latn" → srpski, latinica
 *  "ru"      → ruski
 *
 * Svaki tekst u strings.js je objekat { sr: "...", ru: "..." }.
 * t(entry) vraća tekst za aktivni jezik (ćirilica se dobija preslovljavanjem).
 */
export const LANGUAGES = [
  { code: "sr-Cyrl", label: "Ћир", title: "Српски — ћирилица" },
  { code: "sr-Latn", label: "Lat", title: "Srpski — latinica" },
  { code: "ru", label: "Рус", title: "Русский язык" },
];

const STORAGE_KEY = "duhovni-most-lang";
const LanguageContext = createContext(null);

function readSavedLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.some((l) => l.code === saved)) return saved;
  } catch {
    /* localStorage nije dostupan — koristimo podrazumevani jezik */
  }
  return "sr-Cyrl";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSavedLang);

  // Pamti izbor i ažurira <html lang> (važno za čitače ekrana i fontove)
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignorišemo */
    }
  }, [lang]);

  const t = useCallback(
    (entry) => {
      if (entry == null) return "";
      if (typeof entry === "string") return lang === "sr-Cyrl" ? toCyrillic(entry) : stripTicks(entry);
      if (lang === "ru") return stripTicks(entry.ru ?? entry.sr);
      return lang === "sr-Cyrl" ? toCyrillic(entry.sr) : stripTicks(entry.sr);
    },
    [lang]
  );

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang mora biti unutar <LanguageProvider>");
  return ctx;
}
