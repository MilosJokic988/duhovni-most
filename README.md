# Духовни мост / Duhovni most: Beograd – Sankt Peterburg

React + Vite + Tailwind CSS + lucide-react. Tri jezika: ћирилица / latinica / русский.

## Pokretanje
```bash
npm install
npm run dev
```

## Fotografije
Sve fotografije su sa Wikimedia Commons-a pod slobodnim licencama; spisak je u `src/data/images.js`.
Uz svaku fotografiju na sajtu stoji potpis „Foto: Wikimedia Commons“ sa linkom ka stranici fajla (autor i licenca) — ostavite ga, licence to traže.

Svoju fotografiju dodajete tako što je stavite u `public/img/` i u `images.js` upišete npr. `ruskaCrkva: { src: "/img/ruska-crkva.jpg" }`.

## Tekst i jezici
- Sav tekst: `src/i18n/strings.js` — srpski se piše latinicom (`sr`), ćirilica se pravi automatski; ruski je u `ru`.
- Deo teksta u `obrnutim navodnicima` se ne preslovljava (npr. putanje fajlova).
- Izabrani jezik se pamti u pregledaču.

## Struktura
```
src/
  i18n/            LanguageContext.jsx, strings.js, translit.js
  data/images.js   sve fotografije na jednom mestu
  components/      Navbar, Hero, BelgradeSection, Kiot3D, CandleCorner,
                   PetersburgSection, VrangelSection, InfoSection, Footer,
                   LanguageSwitcher, SectionHeading, SmartImage, Ornaments
tailwind.config.js paleta: parchment, wine (bordo), gold, ink, marble
```
