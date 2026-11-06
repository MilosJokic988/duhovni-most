import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";
import { OrthodoxCross, OrnamentBand } from "./Ornaments";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative bg-gradient-to-b from-wine-800 to-wine-900 pb-10 pt-12 text-center text-sm text-parchment-200/70">
      <OrnamentBand className="absolute left-0 top-0 opacity-70" />
      <OrthodoxCross className="mx-auto mb-3 h-10 w-7 text-gold-400" />
      <p className="font-display text-lg text-gold-300">{t(S.nav.brand)}</p>
      <p className="mt-2">
        {t(S.footer.line)} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
