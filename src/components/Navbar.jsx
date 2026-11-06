import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";
import { OrthodoxCross } from "./Ornaments";
import LanguageSwitcher from "./LanguageSwitcher";

const LINKS = ["beograd", "peterburg", "most", "istorija", "info"];

/** Fiksna navigacija sa izborom jezika i mobilnim menijem. */
export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-parchment-50/95 shadow-md shadow-ink-900/10 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#pocetak" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wine-700 text-gold-300 ring-2 ring-gold-400/60">
            <OrthodoxCross className="h-6 w-5" strokeWidth={2} />
          </span>
          <span className={`hidden font-serif text-xl font-bold sm:inline ${solid ? "text-wine-800" : "text-parchment-50"}`}>
            {t(S.nav.brand)}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${solid ? "text-ink-600" : "text-parchment-100"}`}
              >
                {t(S.nav[id])}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher dark={!solid} />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t(open ? S.nav.closeMenu : S.nav.openMenu)}
            aria-expanded={open}
            className={`rounded-lg p-2 lg:hidden ${solid ? "text-wine-800" : "text-parchment-50"}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? "max-h-72" : "max-h-0"}`}>
        <ul className="space-y-1 border-t border-gold-200 px-4 py-3">
          {LINKS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-medium text-ink-600 hover:bg-parchment-100 hover:text-wine-700"
              >
                {t(S.nav[id])}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
