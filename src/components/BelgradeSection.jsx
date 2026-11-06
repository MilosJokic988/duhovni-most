import { Flame, BookOpen, Landmark } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";
import { IMAGES } from "../data/images";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import CandleCorner from "./CandleCorner";
import Kiot3D from "./Kiot3D";
import { OrnamentBand } from "./Ornaments";
import PhotoCredit from "./PhotoCredit";
import { LifeButton } from "./LifeBook";

const FACT_ICONS = [Flame, BookOpen, Landmark];

/** Sekcija: Hram Svete Trojice na Tašmajdanu */
export default function BelgradeSection() {
  const { t } = useLang();
  const B = S.belgrade;

  return (
    <section id="beograd" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow={t(B.eyebrow)} title={t(B.title)} subtitle={t(B.subtitle)} />

        {/* Fotografija hrama (lučni okvir) + tekst */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <figure className="mx-auto w-full max-w-md">
            <div className="icon-frame arch">
              <div className="arch relative overflow-hidden bg-parchment-100 p-2">
                <SmartImage src={IMAGES.ruskaCrkva.src} alt={t(B.photoCaption)} className="arch h-[440px] w-full" />
                <PhotoCredit href={IMAGES.ruskaCrkva.credit} className="absolute bottom-4 right-5" />
              </div>
            </div>
            <figcaption className="mt-3 text-center font-serif text-lg italic text-ink-500">{t(B.photoCaption)}</figcaption>
          </figure>

          <div>
            <div className="space-y-5 text-lg leading-relaxed text-ink-600">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-wine-600">
                {t(B.p1)}
              </p>
              <p>{t(B.p2)}</p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {B.facts.map((f, i) => {
                const Icon = FACT_ICONS[i];
                return (
                  <div key={i} className="parchment-card flex min-w-0 items-start gap-3 p-4 transition hover:-translate-y-0.5 hover:border-gold-400">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wine-700 text-gold-300 ring-2 ring-gold-400/50">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 break-words [hyphens:auto]">
                      <h4 className="font-serif text-lg font-bold leading-tight text-wine-800">{t(f.title)}</h4>
                      <p className="text-sm text-ink-500">{t(f.text)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3D kivot na tamnoj, toploj pozadini */}
      <div className="relative mt-24 overflow-hidden bg-gradient-to-b from-wine-900 via-ink-900 to-wine-900 py-16">
        <OrnamentBand className="absolute left-0 top-0 opacity-70" />
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading dark eyebrow={t(S.kiot.eyebrow)} title={t(S.kiot.title)} />
          <div className="mt-6">
            <Kiot3D />
          </div>
          <div className="mt-6 flex justify-center">
            <LifeButton book="xenia" />
          </div>
        </div>
        <OrnamentBand className="absolute bottom-0 left-0 opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Virtuelna sveća */}
        <div className="mt-20">
          <CandleCorner />
        </div>

        {/* Unutrašnjost hrama — kartice u obliku ikona */}
        <h3 className="mt-24 text-center font-serif text-3xl font-bold text-wine-800 sm:text-4xl">{t(B.interiorTitle)}</h3>
        <div className="gold-divider">
          <span className="h-2 w-2 rotate-45 bg-gold-500" />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {B.interior.map((item) => (
            <article key={item.key} className="group text-center">
              <div className="icon-frame arch transition-transform duration-500 group-hover:-translate-y-1.5">
                <div className="arch relative overflow-hidden bg-wine-800 p-2">
                  <SmartImage
                    src={IMAGES[item.key].src}
                    alt={t(item.title)}
                    className="arch h-72 w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <PhotoCredit href={IMAGES[item.key].credit} className="absolute bottom-4 right-4" />
                </div>
              </div>
              <h4 className="mt-5 font-serif text-2xl font-bold text-wine-800">{t(item.title)}</h4>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink-500">{t(item.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
