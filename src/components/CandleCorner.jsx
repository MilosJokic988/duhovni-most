import { useState } from "react";
import { Flame } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";

/**
 * Virtuelni kutak molitve.
 * useState broji upaljene sveće: svaki klik pali još jednu sveću na
 * pozlaćenom svećnjaku (najviše 9 vidljivih), a uz prvu se pojavljuje molitva.
 */
const MAX_VISIBLE = 9;

function Candle({ height = "h-28", delay = "0ms", big = false }) {
  return (
    <div className="flex flex-col items-center" style={{ animationDelay: delay }}>
      <div className="relative">
        <span aria-hidden className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-gold-300/60 blur-xl ${big ? "h-24 w-24" : "h-12 w-12"}`} />
        <span
          className={`relative block origin-bottom animate-flicker rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-t from-orange-500 via-gold-300 to-yellow-50 ${
            big ? "h-12 w-6" : "h-6 w-3"
          }`}
          style={{ animationDelay: delay }}
        />
      </div>
      <span className="h-1.5 w-px bg-ink-900" />
      <span className={`${height} ${big ? "w-9" : "w-3"} rounded-t-sm bg-gradient-to-r from-gold-200 via-parchment-50 to-gold-200 shadow-inner`} />
    </div>
  );
}

export default function CandleCorner() {
  const { t } = useLang();
  const [count, setCount] = useState(0);
  const lit = count > 0;
  const small = Math.min(count - 1, MAX_VISIBLE - 1);

  return (
    <div className="parchment-card overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Svećnjak — topla, tamna unutrašnjost hrama */}
        <div className="relative flex min-h-[340px] items-end justify-center overflow-hidden bg-gradient-to-b from-ink-900 via-wine-900 to-ink-900 px-6 pb-10 pt-16">
          <div
            aria-hidden
            className={`absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(230,194,90,0.35),transparent_60%)] transition-opacity duration-1000 ${
              lit ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="relative flex flex-col items-center">
            <div className="flex items-end gap-3">
              {/* Male sveće levo i desno od glavne */}
              {Array.from({ length: Math.max(small, 0) }).map((_, i) =>
                i % 2 === 0 ? (
                  <Candle key={`l${i}`} height={["h-16", "h-20", "h-14"][i % 3]} delay={`${i * 170}ms`} />
                ) : null
              )}
              {lit ? (
                <Candle big height="h-36" />
              ) : (
                <div className="flex flex-col items-center">
                  <span className="h-1.5 w-px bg-ink-700" />
                  <span className="h-36 w-9 rounded-t-sm bg-gradient-to-r from-gold-200 via-parchment-50 to-gold-200 opacity-80" />
                </div>
              )}
              {Array.from({ length: Math.max(small, 0) }).map((_, i) =>
                i % 2 === 1 ? (
                  <Candle key={`r${i}`} height={["h-20", "h-14", "h-16"][i % 3]} delay={`${i * 130}ms`} />
                ) : null
              )}
            </div>
            {/* Pozlaćeni svećnjak */}
            <div className="h-3 w-64 max-w-full rounded-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 shadow-lg" />
            <div className="h-10 w-4 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600" />
            <div className="h-3 w-28 rounded-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600" />
          </div>
        </div>

        {/* Tekst i dugme */}
        <div className="flex flex-col justify-center p-7 text-center sm:p-10 md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wine-600">{t(S.candle.eyebrow)}</p>
          <h3 className="mt-2 font-serif text-3xl font-bold text-wine-800 sm:text-4xl">{t(S.candle.title)}</h3>

          <div className={`grid transition-all duration-700 ${lit ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <blockquote className="overflow-hidden border-l-2 border-gold-500 pl-4 text-left font-serif text-xl italic leading-relaxed text-ink-600">
              {t(S.candle.prayer)}
            </blockquote>
          </div>

          {!lit && <p className="mt-4 leading-relaxed text-ink-500">{t(S.candle.hint)}</p>}

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-7 py-3 font-semibold text-wine-900 shadow-lg shadow-gold-400/40 transition-all hover:-translate-y-0.5 hover:shadow-gold-400/60"
            >
              <Flame className="h-5 w-5" />
              {t(lit ? S.candle.lightAnother : S.candle.light)}
            </button>
          </div>

          {lit && (
            <p className="mt-4 text-sm text-ink-500" aria-live="polite">
              {t(S.candle.count)} <span className="font-semibold text-wine-600">{count}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
