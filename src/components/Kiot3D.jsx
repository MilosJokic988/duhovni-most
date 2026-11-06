import { useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { S } from "../i18n/strings";
import { IMAGES } from "../data/images";
import SmartImage from "./SmartImage";
import { OrthodoxCross } from "./Ornaments";
import PhotoCredit from "./PhotoCredit";

/**
 * 3D KIVOT (kiot) sa ikonom Svete Ksenije — čist CSS 3D, bez dodatnih biblioteka.
 *
 * - Kutija od 6 strana (preserve-3d): prednja strana je pozlaćeni ram sa ikonom,
 *   bočne strane su "drvo", pozadi je ukrašena zadnja ploča.
 * - Kandilo i sveće stoje ISPRED kivota (translateZ), pa se pri okretanju
 *   jasno vidi dubina.
 * - Okretanje: prevlačenje mišem ili prstom (Pointer Events + useState).
 * - Dok ga korisnik ne dirne, kivot se lagano njiše.
 */
const W = 240; // širina kivota (px)
const H = 330; // visina
const D = 40; // dubina

const face = "absolute left-1/2 top-1/2 [backface-visibility:hidden]";
const wood = "bg-gradient-to-b from-wine-800 via-wine-900 to-ink-900 border border-gold-600/60";

export default function Kiot3D() {
  const { t } = useLang();
  const [rot, setRot] = useState({ x: -6, y: 0 });
  const [touched, setTouched] = useState(false);
  const drag = useRef(null);

  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, y: e.clientY, start: rot };
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setTouched(true);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    setRot({
      y: drag.current.start.y + dx * 0.6,
      x: Math.max(-25, Math.min(25, drag.current.start.x - dy * 0.3)),
    });
  };
  const endDrag = () => (drag.current = null);

  const reset = () => {
    setRot({ x: -6, y: 0 });
    setTouched(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Scena sa perspektivom */}
      <div
        className="relative flex h-[460px] w-full cursor-grab select-none items-center justify-center active:cursor-grabbing"
        style={{ perspective: "1100px", touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/* Topli sjaj iza kivota */}
        <div aria-hidden className="absolute h-80 w-80 animate-glow rounded-full bg-gold-400/30 blur-3xl" />

        {/* Spoljni sloj: blago njihanje dok korisnik ne preuzme kontrolu */}
        <div
          className={touched ? "" : "animate-sway"}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Unutrašnji sloj: rotacija iz useState */}
          <div
            className="relative transition-transform duration-75 ease-out"
            style={{
              width: W,
              height: H,
              transformStyle: "preserve-3d",
              transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
            }}
          >
            {/* PREDNJA STRANA — pozlaćeni ram sa ikonom */}
            <div
              className={`${face} rounded-t-[120px] rounded-b-lg bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 p-3 shadow-2xl`}
              style={{ width: W, height: H, transform: `translate(-50%,-50%) translateZ(${D / 2}px)` }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-t-[110px] rounded-b-md bg-wine-800 p-2 ring-1 ring-gold-700/50">
                <SmartImage
                  src={IMAGES.ikonaKsenije.src}
                  alt={t(S.kiot.title)}
                  tone="gold"
                  hint={t(S.kiot.missing)}
                  className="h-[calc(100%-2.25rem)] w-full rounded-t-[100px] rounded-b-sm"
                />
                {/* Odsjaj stakla */}
                <div aria-hidden className="pointer-events-none absolute inset-2 rounded-t-[100px] bg-gradient-to-tr from-transparent via-white/15 to-transparent" />
                {/* Pločica sa imenom */}
                <div className="absolute inset-x-3 bottom-1.5 rounded bg-gradient-to-b from-gold-300 to-gold-500 py-1 text-center font-serif text-sm font-bold text-wine-900">
                  {t(S.kiot.nameplate)}
                </div>
              </div>
            </div>

            {/* ZADNJA STRANA */}
            <div
              className={`${face} ${wood} flex items-center justify-center rounded-t-[120px] rounded-b-lg`}
              style={{ width: W, height: H, transform: `translate(-50%,-50%) rotateY(180deg) translateZ(${D / 2}px)` }}
            >
              <OrthodoxCross className="h-28 w-20 text-gold-400/80" strokeWidth={1.4} />
            </div>

            {/* BOČNE STRANE */}
            <div
              className={`${face} ${wood}`}
              style={{ width: D, height: H - 60, transform: `translate(-50%,-50%) translateY(30px) rotateY(-90deg) translateZ(${W / 2}px)` }}
            />
            <div
              className={`${face} ${wood}`}
              style={{ width: D, height: H - 60, transform: `translate(-50%,-50%) translateY(30px) rotateY(90deg) translateZ(${W / 2}px)` }}
            />

            {/* DONJA POLICA */}
            <div
              className="absolute left-1/2 top-1/2 rounded-md bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"
              style={{ width: W + 24, height: D + 70, transform: `translate(-50%,-50%) rotateX(90deg) translateZ(${-H / 2}px) translateY(30px)` }}
            />

            {/* KANDILO — visi ispred ikone */}
            <div
              className="absolute left-1/2 top-0 flex flex-col items-center"
              style={{ transform: `translateX(-50%) translateY(-34px) translateZ(${D / 2 + 55}px)` }}
            >
              <div className="h-10 w-px bg-gold-400" />
              <div className="relative flex h-9 w-9 items-start justify-center rounded-b-full bg-gradient-to-b from-wine-400 to-wine-700 shadow-[0_0_25px_rgba(220,90,60,0.8)] ring-2 ring-gold-400">
                <span className="mt-[-10px] h-4 w-2 origin-bottom animate-flicker rounded-full bg-gradient-to-t from-orange-500 via-gold-300 to-yellow-50" />
              </div>
            </div>

            {/* SVEĆE — ispred kivota, na polici */}
            {[-80, -50, 50, 80].map((x, i) => (
              <div
                key={x}
                className="absolute bottom-0 left-1/2 flex flex-col items-center"
                style={{ transform: `translateX(calc(-50% + ${x}px)) translateY(${i % 2 ? 4 : 10}px) translateZ(${D / 2 + 40}px)` }}
              >
                <span
                  className={`h-4 w-2 origin-bottom rounded-full bg-gradient-to-t from-orange-500 via-gold-300 to-yellow-50 shadow-[0_0_14px_rgba(255,190,80,0.9)] ${
                    i % 2 ? "animate-flicker" : "animate-flicker-slow"
                  }`}
                />
                <span className="h-0.5 w-px bg-ink-800" />
                <span className={`w-1.5 rounded-sm bg-gradient-to-r from-gold-200 via-parchment-50 to-gold-200 ${i % 2 ? "h-10" : "h-14"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center gap-3 text-center">
        <p className="text-sm italic text-parchment-200/80">{t(S.kiot.hint)}</p>
        <PhotoCredit href={IMAGES.ikonaKsenije.credit} className="relative" />
        {touched && (
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-4 py-2 text-xs font-semibold text-gold-200 transition hover:bg-wine-700/40"
          >
            <RotateCcw className="h-3.5 w-3.5" /> {t(S.kiot.reset)}
          </button>
        )}
      </div>
    </div>
  );
}
