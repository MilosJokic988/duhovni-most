import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { LIFE } from "../i18n/life";
import { SAVA_LIFE } from "../i18n/lifeSava";
import { IMAGES } from "../data/images";
import SmartImage from "./SmartImage";
import { OrthodoxCross, OrnamentBand } from "./Ornaments";

/**
 * ŽITIJA — knjiga koja se otvara na dugme (Sveta Ksenija, Sveti Sava).
 *
 * <LifeProvider> drži stanje: koja je knjiga otvorena (ili nijedna).
 * <LifeButton book="xenia" | "sava"> može da se postavi bilo gde na sajtu.
 * Unutra: spisak poglavlja (levo), tekst poglavlja i dugmad Prethodno/Sledeće.
 * Zatvara se na X, klikom van knjige ili tasterom Escape.
 */
const BOOKS = {
  xenia: { data: LIFE, image: IMAGES.ikonaKsenije },
  sava: { data: SAVA_LIFE, image: IMAGES.svetiSava },
};

const LifeContext = createContext(null);

export function LifeProvider({ children }) {
  const [book, setBook] = useState(null); // null | "xenia" | "sava"
  const openLife = useCallback((key) => setBook(key), []);
  return (
    <LifeContext.Provider value={{ openLife }}>
      {children}
      {book && <LifeModal key={book} book={BOOKS[book]} onClose={() => setBook(null)} />}
    </LifeContext.Provider>
  );
}

/**
 * Dugme koje otvara žitije.
 * `book`: "xenia" ili "sava"; `variant`: "gold" (puno) ili "outline" (na tamnoj pozadini).
 */
export function LifeButton({ book = "xenia", variant = "gold", className = "" }) {
  const { t } = useLang();
  const { openLife } = useContext(LifeContext);
  const LIFE = BOOKS[book].data;
  const styles =
    variant === "gold"
      ? "bg-gradient-to-b from-gold-300 to-gold-500 text-wine-900 shadow-lg shadow-gold-400/40 hover:shadow-gold-400/60"
      : "border border-gold-400/60 bg-wine-900/30 text-gold-100 hover:border-gold-300 hover:bg-wine-700/40";
  return (
    <button
      onClick={() => openLife(book)}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      <BookOpen className="h-4 w-4" />
      {t(LIFE.button)}
    </button>
  );
}

function LifeModal({ book, onClose }) {
  const { t } = useLang();
  const LIFE = book.data;
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);
  const chapters = LIFE.chapters;
  const ch = chapters[index];

  // Zaključaj skrolovanje stranice i zatvaranje na Escape; strelice listaju poglavlja
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, chapters.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, chapters.length]);

  // Na promenu poglavlja vrati tekst na vrh
  useEffect(() => {
    textRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [index]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t(LIFE.title)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/80 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-5xl animate-fade-up flex-col overflow-hidden rounded-3xl bg-parchment-50 shadow-2xl ring-2 ring-gold-400/60"
      >
        {/* Zaglavlje knjige */}
        <header className="relative shrink-0 bg-gradient-to-b from-wine-800 to-wine-900 px-6 pb-5 pt-6 text-center sm:px-10">
          <button
            onClick={onClose}
            aria-label={t(LIFE.close)}
            className="absolute right-4 top-4 rounded-full p-2 text-gold-200 transition hover:bg-wine-700"
          >
            <X className="h-6 w-6" />
          </button>
          <OrthodoxCross className="mx-auto h-9 w-7 text-gold-300" />
          <h2 className="mt-2 font-display text-xl leading-snug text-gold-300 sm:text-3xl">{t(LIFE.title)}</h2>
          <p className="mt-1 font-serif text-base italic text-parchment-200/80 sm:text-lg">{t(LIFE.subtitle)}</p>
          <OrnamentBand className="absolute bottom-0 left-0 opacity-60" />
        </header>

        <div className="flex min-h-0 flex-1 flex-col md:flex-row">
          {/* Sadržaj: poglavlja (vodoravno na telefonu, uspravno na većem ekranu) */}
          <nav className="shrink-0 border-b border-gold-200 bg-parchment-100 md:w-64 md:overflow-y-auto md:border-b-0 md:border-r">
            <div className="hidden p-4 md:block">
              <div className="icon-frame mx-auto w-32">
                <div className="overflow-hidden rounded-xl bg-wine-800 p-1">
                  <SmartImage src={book.image.src} alt={t(LIFE.title)} tone="gold" className="h-40 w-full rounded-lg" />
                </div>
              </div>
            </div>
            <ol className="flex gap-1 overflow-x-auto p-2 md:flex-col md:overflow-visible md:p-3 md:pt-0">
              {chapters.map((c, i) => (
                <li key={i} className="shrink-0">
                  <button
                    onClick={() => setIndex(i)}
                    aria-current={i === index ? "step" : undefined}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition ${
                      i === index ? "bg-wine-700 text-gold-100 shadow" : "text-ink-600 hover:bg-parchment-200"
                    }`}
                  >
                    <span className={`font-display text-xs ${i === index ? "text-gold-300" : "text-wine-600"}`}>{i + 1}</span>
                    <span className="whitespace-nowrap md:whitespace-normal">{t(c.title)}</span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          {/* Tekst poglavlja */}
          <article ref={textRef} key={index} className="min-h-0 flex-1 animate-fade-up overflow-y-auto px-6 py-7 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wine-600">
              {t(LIFE.chapter)} {index + 1} / {chapters.length} · {t(ch.year)}
            </p>
            <h3 className="mt-2 font-serif text-3xl font-bold text-wine-800 sm:text-4xl">{t(ch.title)}</h3>
            <div className="gold-divider !mx-0">
              <span className="h-2 w-2 rotate-45 bg-gold-500" />
            </div>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-700">
              {ch.body.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-wine-600"
                      : ""
                  }
                >
                  {t(para)}
                </p>
              ))}
            </div>
            {index === chapters.length - 1 && <p className="mt-8 text-sm italic text-ink-400">{t(LIFE.note)}</p>}
          </article>
        </div>

        {/* Listanje */}
        <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-gold-200 bg-parchment-100 px-4 py-3 sm:px-8">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-wine-700 transition hover:bg-parchment-200 disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" /> {t(LIFE.prev)}
          </button>
          <div className="hidden gap-1.5 sm:flex">
            {chapters.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-wine-600" : "w-1.5 bg-gold-300"}`} />
            ))}
          </div>
          <button
            onClick={() => setIndex((i) => Math.min(i + 1, chapters.length - 1))}
            disabled={index === chapters.length - 1}
            className="inline-flex items-center gap-1 rounded-full bg-wine-700 px-4 py-2 text-sm font-semibold text-gold-100 transition hover:bg-wine-600 disabled:opacity-30"
          >
            {t(LIFE.next)} <ChevronRight className="h-4 w-4" />
          </button>
        </footer>
      </div>
    </div>
  );
}
