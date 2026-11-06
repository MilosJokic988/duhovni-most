import { OrthodoxCross } from "./Ornaments";

/** Naslov sekcije: krst, nadnaslov, serif naslov i zlatni ukras. `dark` za tamne pozadine. */
export default function SectionHeading({ eyebrow, title, subtitle, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <OrthodoxCross className={`mx-auto mb-4 h-10 w-8 ${dark ? "text-gold-300" : "text-gold-500"}`} />
      {eyebrow && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${dark ? "text-gold-300" : "text-wine-600"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${
          dark ? "text-parchment-50" : "text-wine-800"
        }`}
      >
        {title}
      </h2>
      <div className="gold-divider">
        <span className={`h-2 w-2 rotate-45 ${dark ? "bg-gold-300" : "bg-gold-500"}`} />
      </div>
      {subtitle && (
        <p className={`mt-5 font-serif text-xl italic leading-relaxed sm:text-2xl ${dark ? "text-parchment-200/80" : "text-ink-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
