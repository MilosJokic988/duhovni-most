/**
 * Ukrasni elementi u tradicionalnom duhu:
 *  - OrthodoxCross: osmokraki pravoslavni krst (SVG)
 *  - OrnamentBand: zlatna traka sa rombovima, kao vez ili ram ikone
 */
export function OrthodoxCross({ className = "h-8 w-8", strokeWidth = 1.6 }) {
  return (
    <svg viewBox="0 0 40 56" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" className={className} aria-hidden>
      <line x1="20" y1="3" x2="20" y2="53" />
      <line x1="14" y1="9" x2="26" y2="9" />
      <line x1="7" y1="19" x2="33" y2="19" />
      <line x1="13" y1="41" x2="27" y2="36" />
    </svg>
  );
}

export function OrnamentBand({ className = "" }) {
  return (
    <div aria-hidden className={`h-4 w-full ${className}`}>
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id="orn" width="32" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 8 H32" stroke="#d4a637" strokeWidth="0.8" opacity="0.6" />
            <path d="M16 1 L23 8 L16 15 L9 8 Z" fill="none" stroke="#d4a637" strokeWidth="1.1" />
            <circle cx="16" cy="8" r="1.6" fill="#d4a637" />
            <circle cx="0" cy="8" r="1" fill="#d4a637" />
            <circle cx="32" cy="8" r="1" fill="#d4a637" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#orn)" />
      </svg>
    </div>
  );
}
