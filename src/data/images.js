/**
 * Sve fotografije su sa Wikimedia Commons-a (slobodne licence: CC BY-SA, CC BY, javno dobro).
 * Autor i tačna licenca su na stranici fajla (`credit`); na sajtu se uz svaku
 * fotografiju prikazuje potpis "Foto: Wikimedia Commons" sa linkom na tu stranicu.
 *
 * Želite svoju fotografiju umesto neke od ovih? Stavite je u public/img/
 * i zamenite vrednost, npr.:  ruskaCrkva: { src: "/img/ruska-crkva.jpg" }
 */

// Stabilan link ka Commons fajlu u željenoj širini (Commons sam pravi umanjenu verziju)
const commons = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
const commonsPage = (file) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;
const C = (file, width) => ({ src: commons(file, width), credit: commonsPage(file) });

export const IMAGES = {
  // --- Beograd: Hram Svete Trojice na Tašmajdanu ---
  ruskaCrkva: C("Russian_church_in_Belgrade.JPG"), // autor: Petar Milošević, CC BY-SA 4.0
  osvecenje: C("После_освящения_русской_церкви_в_Белграде.jpg"), // istorijska fotografija, 1920-ih
  salAlekseja: C(
    "Свјетлопис_дијела_шала_и_иконе_Св._муч._Алексеја_Николајевича_у_руској_цркви_у_Биограду_на_дан_Св._Сергија_Радоњешког,_8.10.2022.jpg"
  ),

  // --- Sveta Ksenija ---
  ikonaKsenije: C("Ksenia_of_petersbourg.jpeg", 600), // ikona (glavna slika Ksenije na Wikidata)

  // --- Sveti Sava: najstariji sačuvani portret, freska iz Mileševe (13. vek, javno dobro) ---
  svetiSava: C("SvetiSavaMileseva.jpg", 600),

  // --- General Vrangel: grob u hramu ---
  vrangelGrob: C("Гробница_барона_Врангеля_в_Белграде.jpg"),

  // --- Sankt Peterburg ---
  kapelaSpolja: C("StXeniaChapel.jpg", 800), // autor: Viktor Kravtchenko
  kapelaKsenije: C("Sarcophagus_of_Blessed_Xenia_of_Saint_Petersburg.jpeg"), // CC BY 3.0
  spasNaKrvi: C("The_Church_of_the_Saviour_on_Spilled_Blood_(20956466968).jpg"), // Jorge Láscar
  svetiIsak: C("Saint_Isaac's_Cathedral_in_SPB.jpeg"), // Florstein, CC BY-SA 4.0
  zimskiDvorac: C("Winter_Palace_and_the_Alexander_Column_(20956428660).jpg"),
};
