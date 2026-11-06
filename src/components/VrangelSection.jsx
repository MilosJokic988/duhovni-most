import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";
import { IMAGES } from "../data/images";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import { OrthodoxCross } from "./Ornaments";
import PhotoCredit from "./PhotoCredit";

/** Sekcija: Istorijski kutak – General Vrangel (topli tamni mermer) */
export default function VrangelSection() {
  const { t } = useLang();
  const V = S.wrangel;

  return (
    <section id="istorija" className="marble-texture relative py-20 text-parchment-100 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading dark eyebrow={t(V.eyebrow)} title={t(V.title)} subtitle={t(V.subtitle)} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Fotografija groba u zlatnom ramu */}
          <figure className="mx-auto w-full max-w-md self-start">
            <div className="icon-frame">
              <div className="relative overflow-hidden rounded-xl border-4 border-wine-800">
                <SmartImage
                  src={IMAGES.vrangelGrob.src}
                  alt={t(V.tombCaption)}
                  tone="marble"
                  className="aspect-[4/3] w-full sepia-[20%]"
                />
                <PhotoCredit href={IMAGES.vrangelGrob.credit} />
              </div>
            </div>
            <figcaption className="mt-4 text-center font-serif text-xl italic text-gold-200">{t(V.tombCaption)}</figcaption>
          </figure>

          <div className="space-y-5 text-lg leading-relaxed text-parchment-100/85">
            <p>{t(V.p1)}</p>
            <p>{t(V.p2)}</p>

            <ol className="relative mt-8 space-y-5 border-l border-gold-400/40 pl-6">
              {V.timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rotate-45 border-2 border-gold-400 bg-marble-900" />
                  <span className="font-serif text-2xl font-bold text-gold-300">{item.year}</span>
                  <p className="text-base text-parchment-100/80">{t(item.text)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mermerni sarkofag */}
        <article className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-b from-marble-700 to-marble-900 shadow-2xl ring-1 ring-gold-400/20">
          <div className="grid md:grid-cols-2">
            <div className="relative border-b border-gold-500/30 bg-gradient-to-br from-marble-300/30 via-marble-700 to-marble-800 px-8 py-12 text-center md:border-b-0 md:border-r">
              <div className="pointer-events-none absolute inset-4 rounded-xl border border-gold-400/40" />
              <OrthodoxCross className="mx-auto h-12 w-9 text-gold-300" />
              <p className="mt-5 font-serif text-sm uppercase tracking-[0.35em] text-gold-200">{t(V.hereLies)}</p>
              <h3 className="mt-2 font-display text-2xl text-parchment-50 sm:text-3xl">{t(V.name)}</h3>
              <p className="mt-2 font-serif text-lg text-parchment-100/80">1878 – 1928</p>
            </div>
            <div className="space-y-4 p-8">
              <h4 className="font-serif text-2xl font-bold text-gold-200">{t(V.lastWish)}</h4>
              <p className="leading-relaxed text-parchment-100/85">{t(V.c1)}</p>
              <p className="leading-relaxed text-parchment-100/85">{t(V.c2)}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
