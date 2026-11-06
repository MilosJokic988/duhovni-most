/**
 * Preslovljavanje srpske latinice u ćirilicu.
 * Sav srpski tekst pišemo jednom (latinicom), a ćirilica se dobija automatski.
 * Dvoslovi (lj, nj, dž) se obrađuju pre pojedinačnih slova.
 */
const DIGRAPHS = [
  ["DŽ", "Џ"], ["Dž", "Џ"], ["dž", "џ"],
  ["LJ", "Љ"], ["Lj", "Љ"], ["lj", "љ"],
  ["NJ", "Њ"], ["Nj", "Њ"], ["nj", "њ"],
];

const LETTERS = {
  A: "А", B: "Б", V: "В", G: "Г", D: "Д", Đ: "Ђ", E: "Е", Ž: "Ж", Z: "З", I: "И",
  J: "Ј", K: "К", L: "Л", M: "М", N: "Н", O: "О", P: "П", R: "Р", S: "С", T: "Т",
  Ć: "Ћ", U: "У", F: "Ф", H: "Х", C: "Ц", Č: "Ч", Š: "Ш",
  a: "а", b: "б", v: "в", g: "г", d: "д", đ: "ђ", e: "е", ž: "ж", z: "з", i: "и",
  j: "ј", k: "к", l: "л", m: "м", n: "н", o: "о", p: "п", r: "р", s: "с", t: "т",
  ć: "ћ", u: "у", f: "ф", h: "х", c: "ц", č: "ч", š: "ш",
};

function convert(text) {
  let out = text;
  for (const [lat, cyr] of DIGRAPHS) out = out.split(lat).join(cyr);
  return out.replace(/[A-Za-zĐđŽžĆćČčŠš]/g, (ch) => LETTERS[ch] ?? ch);
}

/**
 * Deo teksta između `obrnutih navodnika` se NE preslovljava
 * (putanje fajlova, latinični nazivi, linkovi). Navodnici se uklanjaju.
 */
export function toCyrillic(text) {
  if (typeof text !== "string") return text;
  return text
    .split(/(`[^`]*`)/)
    .map((part) => (part.startsWith("`") ? part.slice(1, -1) : convert(part)))
    .join("");
}

/** Za latinicu i ruski: samo ukloni obrnute navodnike. */
export const stripTicks = (text) => (typeof text === "string" ? text.replace(/`/g, "") : text);
