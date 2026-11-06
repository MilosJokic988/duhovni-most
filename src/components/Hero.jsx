import { Church, Compass, BookOpen, ChevronDown } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";
import { OrthodoxCross, OrnamentBand } from "./Ornaments";
import { LifeButton } from "./LifeBook";

/**
 * Glavni ekran — topla "unutrašnjost hrama":
 * duboka bordo pozadina, sjaj sveća i zlatni naslov u staroruskom fontu.
 */
const QUICK_NAV = [
  { id: "beograd", icon: Church },
  { id: "peterburg", icon: Compass },
  { id: "istorija", icon: BookOpen },
];

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="pocetak"
      className="relative flex min-h-[94vh] items-center overflow-hidden bg-gradient-to-b from-wine-900 via-wine-800 to-ink-900"
    >
      {/* Topli sjaj, kao od kandila */}
      <div aria-hidden className="absolute left-1/2 top-[38%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-gold-400/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      {/* Ukrasni ram oko celog ekrana */}
      <div aria-hidden className="pointer-events-none absolute inset-4 rounded-[2rem] border border-gold-400/25 sm:inset-8" />
      <OrnamentBand className="absolute bottom-0 left-0 opacity-70" />

      <div className="relative mx-auto max-w-4xl px-5 pt-24 text-center sm:px-6">
        <OrthodoxCross className="mx-auto mb-6 h-14 w-10 animate-fade-up text-gold-300" strokeWidth={1.8} />

        <p className="mb-6 inline-flex animate-fade-up items-center rounded-full border border-gold-400/40 bg-wine-900/40 px-5 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-gold-200">
          {t(S.hero.eyebrow)}
        </p>

        <h1 className="animate-fade-up [animation-delay:120ms]">
          <span className="block font-display text-4xl leading-tight text-gold-300 drop-shadow-[0_2px_12px_rgba(212,166,55,0.35)] sm:text-6xl md:text-7xl">
            {t(S.hero.title1)}
          </span>
          <span className="mt-3 block font-serif text-2xl font-semibold italic text-parchment-100 sm:text-4xl">
            {t(S.hero.title2)}
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl animate-fade-up text-base leading-relaxed text-parchment-200/90 [animation-delay:240ms] sm:text-lg">
          {t(S.hero.subtitle)}
        </p>

        <div className="mt-10 flex animate-fade-up flex-col items-stretch justify-center gap-3 [animation-delay:360ms] sm:flex-row sm:items-center">
          {QUICK_NAV.map(({ id, icon: Icon }, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                i === 0
                  ? "bg-gradient-to-b from-gold-300 to-gold-500 text-wine-900 shadow-lg shadow-gold-500/30 hover:shadow-gold-400/50"
                  : "border border-gold-400/50 bg-wine-900/30 text-parchment-100 backdrop-blur hover:border-gold-300 hover:bg-wine-700/40"
              }`}
            >
              <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
              {t(S.nav[id])}
            </a>
          ))}
        </div>

        {/* Žitije Svete Ksenije — posebno dugme */}
        <div className="mt-4 flex animate-fade-up flex-col justify-center gap-3 [animation-delay:480ms] sm:flex-row">
          <LifeButton book="xenia" variant="outline" className="w-full sm:w-auto" />
          <LifeButton book="sava" variant="outline" className="w-full sm:w-auto" />
        </div>
      </div>

      <a href="#beograd" aria-label={t(S.hero.scroll)} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-300/80 hover:text-gold-200">
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
