import { useState } from "react";
import { MapPin, Clock, Phone, Compass } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";
import SectionHeading from "./SectionHeading";
import { OrthodoxCross } from "./Ornaments";

/** Sekcija: Praktične informacije — tabovi gradova (useState) + mockup mape */
export default function InfoSection() {
  const { t } = useLang();
  const I = S.info;
  const [city, setCity] = useState("beograd");
  const info = I.cities[city];
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.mapQuery)}`;

  return (
    <section id="info" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow={t(I.eyebrow)} title={t(I.title)} subtitle={t(I.subtitle)} />

        <div className="mt-12 flex justify-center">
          <div role="tablist" className="inline-flex rounded-full bg-parchment-100 p-1.5 ring-1 ring-gold-300">
            {Object.entries(I.cities).map(([key, c]) => (
              <button
                key={key}
                role="tab"
                aria-selected={city === key}
                onClick={() => setCity(key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                  city === key ? "bg-wine-700 text-gold-200 shadow-md" : "text-ink-600 hover:text-wine-700"
                }`}
              >
                {t(c.tab)}
              </button>
            ))}
          </div>
        </div>

        <div key={city} className="mt-10 grid animate-fade-up gap-6 lg:grid-cols-5">
          <div className="parchment-card space-y-6 p-7 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wine-700 text-gold-300 ring-2 ring-gold-400/50">
                <OrthodoxCross className="h-6 w-5" strokeWidth={2} />
              </span>
              <h3 className="font-serif text-2xl font-bold text-wine-800">{t(info.place)}</h3>
            </div>
            <Row icon={MapPin} label={t(I.address)}>{t(info.address)}</Row>
            <Row icon={Clock} label={t(I.hours)}>
              <ul className="space-y-1">
                {info.hours.map((h, i) => (
                  <li key={i}>
                    <span className="font-semibold text-ink-700">{t(h.day)}:</span> {t(h.time)}
                  </li>
                ))}
              </ul>
            </Row>
            <Row icon={Phone} label={t(I.phone)}>{info.phone}</Row>
            <Row icon={Compass} label={t(I.transit)}>{t(info.transitText)}</Row>
          </div>

          {/* Mockup mape u toplim tonovima — klik otvara Google mape */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block min-h-[320px] overflow-hidden rounded-3xl bg-parchment-200 shadow-lg ring-1 ring-gold-300 lg:col-span-3"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: "linear-gradient(#d9c39a 1px, transparent 1px), linear-gradient(90deg, #d9c39a 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div aria-hidden className="absolute left-0 top-1/3 h-3 w-full -rotate-6 bg-parchment-50 shadow-sm" />
            <div aria-hidden className="absolute left-1/3 top-0 h-full w-3 rotate-12 bg-parchment-50 shadow-sm" />
            <div aria-hidden className="absolute bottom-10 right-10 h-28 w-40 rounded-[40%] bg-emerald-700/25" />
            {city === "peterburg" && <div aria-hidden className="absolute -left-10 bottom-0 h-16 w-[130%] -rotate-3 bg-sky-800/25" />}
            {/* Kompas u uglu, kao na staroj karti */}
            <Compass aria-hidden className="absolute right-5 top-5 h-12 w-12 text-wine-600/40" />

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
              <span className="mb-2 whitespace-nowrap rounded-full bg-parchment-50 px-3 py-1 text-xs font-semibold text-wine-800 shadow-md">
                {t(info.place)}
              </span>
              <span className="relative flex">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                <MapPin className="relative h-10 w-10 fill-gold-400 text-wine-800 drop-shadow-lg transition-transform group-hover:-translate-y-1" />
              </span>
            </div>

            <span className="absolute bottom-4 left-4 rounded-full bg-wine-700 px-4 py-2 text-xs font-semibold text-gold-200 shadow-lg transition group-hover:bg-wine-600">
              {t(I.openMap)}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{label}</p>
        <div className="mt-0.5 text-ink-600">{children}</div>
      </div>
    </div>
  );
}
