import { LANGUAGES, useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";

/** Dugmići za jezik: Ћир / Lat / Рус */
export default function LanguageSwitcher({ dark = false }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t(S.nav.language)}
      className={`inline-flex rounded-full p-1 ring-1 ${dark ? "bg-wine-900/40 ring-gold-400/40" : "bg-parchment-100 ring-gold-300"}`}
    >
      {LANGUAGES.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            title={l.title}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
              active
                ? "bg-gradient-to-b from-gold-300 to-gold-500 text-wine-900 shadow"
                : dark
                ? "text-parchment-100/80 hover:text-gold-200"
                : "text-ink-500 hover:text-wine-700"
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
