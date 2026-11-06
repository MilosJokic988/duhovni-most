/**
 * Duhovni most: Beograd – Sankt Peterburg
 *
 * LanguageProvider → ćirilica / latinica / ruski (dugmići u navigaciji)
 *  Navbar            → navigacija + izbor jezika
 *  Hero              → glavni ekran
 *  BelgradeSection   → Hram Sv. Trojice, 3D kivot, virtuelna sveća, unutrašnjost
 *  PetersburgSection → Smolensko groblje, kapela, galerija Peterburga
 *  VrangelSection    → portret, vremenska linija, mermerni sarkofag
 *  InfoSection       → tabovi gradova, adresa, radno vreme, mapa
 *  BridgeSection     → "Most u oba pravca": Sveta Ksenija i Sveti Sava
 *  LifeProvider      → žitija Svete Ksenije i Svetog Save (knjiga na dugme)
 */
import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BelgradeSection from "./components/BelgradeSection";
import PetersburgSection from "./components/PetersburgSection";
import BridgeSection from "./components/BridgeSection";
import VrangelSection from "./components/VrangelSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import { LifeProvider } from "./components/LifeBook";

export default function App() {
  return (
    <LanguageProvider>
      <LifeProvider>
      <Navbar />
      <main>
        <Hero />
        <BelgradeSection />
        <PetersburgSection />
        <BridgeSection />
        <VrangelSection />
        <InfoSection />
      </main>
      <Footer />
      </LifeProvider>
    </LanguageProvider>
  );
}
