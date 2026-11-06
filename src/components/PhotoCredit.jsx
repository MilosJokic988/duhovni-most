import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";

/** Mali potpis "Foto: Wikimedia Commons" sa linkom na stranicu fajla (autor + licenca). */
export default function PhotoCredit({ href, className = "absolute bottom-2 right-3" }) {
  const { t } = useLang();
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerDown={(e) => e.stopPropagation()}
      className={`z-10 rounded bg-ink-900/60 px-2 py-0.5 text-[10px] text-parchment-100/90 hover:text-gold-200 ${className}`}
    >
      {t(S.common.photoCredit)}
    </a>
  );
}
