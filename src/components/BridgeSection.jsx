import { ArrowLeftRight, Church, Mountain } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";
import { IMAGES } from "../data/images";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import PhotoCredit from "./PhotoCredit";
import { LifeButton } from "./LifeBook";
import { OrnamentBand } from "./Ornaments";

/**
 * MOST U OBA PRAVCA
 * Levo: Sveta Ksenija (Rusija → Srbija). Desno: Sveti Sava (Srbija → Rusija).
 * U sredini zlatni "most". Svaka kartica ima dugme za svoje žitije.
 * Ispod: "Još mostova vere" — Sveti Vasilije Ostroški i Sveti Jovan Šangajski.
 */
function SaintCard({ data, image, book, accent }) {
  const { t } = useLang();
  return (
    <article className="parchment-card flex h-full flex-col overflow-hidden">
      {/* Gornja traka sa smerom mosta */}
      <div className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold uppercase tracking-[0.25em] ${accent}`}>
        {t(data.label)}
      </div>

      <div className="flex flex-1 flex-col items-center p-6 text-center sm:p-8">
        {/* Ikona/freska u lučnom zlatnom ramu */}
        <figure className="w-40 sm:w-48">
          <div className="icon-frame arch">
            <div className="arch relative overflow-hidden bg-wine-800 p-1.5">
              <SmartImage src={image.src} alt={t(data.photo)} tone="gold" className="arch h-56 w-full sm:h-64" />
            </div>
          </div>
          <figcaption className="mt-2 text-xs italic text-ink-400">
            {t(data.photo)} · <PhotoCredit href={image.credit} className="!bg-transparent !p-0 !text-ink-400 underline" />
          </figcaption>
        </figure>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-wine-600">{t(data.tagline)}</p>
        <h3 className="mt-1 font-serif text-2xl font-bold leading-tight text-wine-800 sm:text-3xl">{t(data.name)}</h3>

        <ul className="mt-5 space-y-3 text-left">
          {data.points.map((p, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-ink-600">
              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold-500" />
              <span>{t(p)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <LifeButton book={book} />
        </div>
      </div>
    </article>
  );
}

export default function BridgeSection() {
  const { t } = useLang();
  const B = S.bridge;

  return (
    <section id="most" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow={t(B.eyebrow)} title={t(B.title)} subtitle={t(B.subtitle)} />

        <div className="relative mt-14 grid items-stretch gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <SaintCard data={B.xenia} image={IMAGES.ikonaKsenije} book="xenia" accent="bg-wine-700 text-gold-200" />

          {/* Zlatni most između dve kartice */}
          <div className="flex items-center justify-center lg:flex-col">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400 lg:h-24 lg:w-px lg:bg-gradient-to-b" />
            <span className="mx-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-gold-300 to-gold-500 text-wine-900 shadow-lg shadow-gold-400/40 ring-4 ring-parchment-50 lg:my-3">
              <ArrowLeftRight className="h-6 w-6 rotate-90 lg:rotate-0" />
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400 lg:h-24 lg:w-px lg:bg-gradient-to-t" />
          </div>

          <SaintCard data={B.sava} image={IMAGES.svetiSava} book="sava" accent="bg-ink-800 text-gold-200" />
        </div>

        {/* Još mostova vere */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-wine-800 via-wine-900 to-ink-900 px-6 py-10 text-parchment-100 shadow-xl sm:px-10">
          <OrnamentBand className="absolute left-0 top-0 opacity-50" />
          <h3 className="text-center font-serif text-2xl font-bold text-gold-200 sm:text-3xl">{t(B.moreTitle)}</h3>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {B.more.map((m, i) => {
              const Icon = i === 0 ? Mountain : Church;
              return (
                <div key={i} className="flex gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-gold-400/20">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/40">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-serif text-xl font-bold text-parchment-50">{t(m.name)}</h4>
                    <p className="mt-1 leading-relaxed text-parchment-200/80">{t(m.text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
