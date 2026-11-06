import { MapPin, Flame } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";
import { IMAGES } from "../data/images";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import PhotoCredit from "./PhotoCredit";
import { LifeButton } from "./LifeBook";

/** Sekcija: Hodočašće u Sankt Peterburg – Grob Svete Ksenije */
export default function PetersburgSection() {
  const { t } = useLang();
  const P = S.petersburg;

  return (
    <section id="peterburg" className="bg-gradient-to-b from-parchment-100 via-parchment-50 to-parchment-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow={t(P.eyebrow)} title={t(P.title)} subtitle={t(P.subtitle)} />

        {/* Priča + istaknuta kartica kapele */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            <p className="first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-wine-600">
              {t(P.p1)}
            </p>
            <p>{t(P.p2)}</p>
            <LifeButton book="xenia" className="mt-2" />
          </div>

          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-wine-700 via-wine-800 to-ink-900 text-parchment-50 shadow-2xl shadow-wine-900/30 ring-1 ring-gold-400/40">
            <div className="relative h-56 sm:h-64">
              <SmartImage src={IMAGES.kapelaKsenije.src} alt={t(P.chapelPhoto)} className="h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-900 via-wine-900/20 to-transparent" />
              <PhotoCredit href={IMAGES.kapelaKsenije.credit} />
            </div>
            <div className="p-7">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
                <MapPin className="h-4 w-4" /> {t(P.chapelLabel)}
              </p>
              <h3 className="mt-2 font-serif text-3xl font-bold">{t(P.chapelTitle)}</h3>
              <p className="mt-3 leading-relaxed text-parchment-100/85">{t(P.chapelText)}</p>
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <Flame className="h-6 w-6 shrink-0 animate-flicker text-gold-300" />
                <p className="text-sm italic text-parchment-100/90">{t(P.chapelNote)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Galerija znamenitosti */}
        <h3 className="mt-24 text-center font-serif text-3xl font-bold text-wine-800 sm:text-4xl">{t(P.galleryTitle)}</h3>
        <div className="gold-divider">
          <span className="h-2 w-2 rotate-45 bg-gold-500" />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {P.places.map((place) => {
            const img = IMAGES[place.key];
            return (
              <article
                key={place.key}
                className="group overflow-hidden rounded-3xl bg-parchment-50 shadow-lg shadow-ink-900/10 ring-1 ring-gold-200 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-wine-900/20 hover:ring-gold-400"
              >
                <div className="relative m-2 h-64 overflow-hidden rounded-2xl sm:h-72">
                  <SmartImage
                    src={img.src}
                    alt={t(place.title)}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-wine-900/10 to-transparent" />
                  <div className="pointer-events-none absolute inset-3 rounded-xl border border-gold-300/50 transition-colors duration-500 group-hover:border-gold-300" />
                  <span className="absolute left-5 top-5 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-3 py-1 text-xs font-semibold text-wine-900 shadow">
                    {t(place.badge)}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="flex items-center gap-1.5 text-sm text-gold-200">
                      <MapPin className="h-4 w-4" /> {t(place.subtitle)}
                    </p>
                    <h4 className="mt-1 font-serif text-2xl font-bold text-parchment-50 sm:text-3xl">{t(place.title)}</h4>
                  </div>
                  <PhotoCredit href={img.credit} />
                </div>
                <p className="px-6 pb-6 pt-3 leading-relaxed text-ink-600">{t(place.text)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
