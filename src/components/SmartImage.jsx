import { useState } from "react";
import { OrthodoxCross } from "./Ornaments";

/**
 * Slika sa toplim rezervnim prikazom.
 * Ako fotografija ne postoji (npr. još niste dodali /public/img/...),
 * prikazuje se topli gradijent sa krstom i, po želji, kratkom porukom (`hint`).
 */
const TONES = {
  wine: "from-wine-600 via-wine-800 to-wine-900 text-gold-300",
  gold: "from-gold-100 via-gold-200 to-gold-400 text-wine-700",
  marble: "from-marble-500 via-marble-700 to-marble-900 text-gold-300",
};

export default function SmartImage({ src, alt, tone = "wine", hint, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br p-4 text-center ${TONES[tone]} ${className}`}
      >
        <OrthodoxCross className="h-12 w-10 opacity-80" />
        {hint && <p className="max-w-[16rem] text-xs leading-snug opacity-80">{hint}</p>}
      </div>
    );
  }

  return (
    <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />
  );
}
