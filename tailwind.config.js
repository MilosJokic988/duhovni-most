/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      /*
       * Tradicionalna, topla paleta:
       *  parchment → pergament / slonovača (pozadina, kao stara knjiga)
       *  wine      → bordo / vinsko crvena (crkveni barjaci, ruski i srpski motivi)
       *  gold      → zlato ikona i kandila
       *  ink       → topla tamnosmeđa (tekst, kao mastilo)
       *  marble    → topli tamni mermer (sarkofag generala Vrangela)
       */
      colors: {
        parchment: {
          50: "#fdfaf3",
          100: "#f8f0df",
          200: "#efe0c0",
          300: "#e2c995",
        },
        wine: {
          400: "#b8475a",
          500: "#9b2335",
          600: "#7f1d2b",
          700: "#651722",
          800: "#4a1019",
          900: "#2e0a0f",
        },
        gold: {
          50: "#fdf8ea",
          100: "#f8ecc6",
          200: "#f0d98f",
          300: "#e6c25a",
          400: "#d4a637",
          500: "#b8892a",
          600: "#946b20",
          700: "#73521b",
        },
        ink: {
          300: "#a8927e",
          400: "#8a725d",
          500: "#6b5443",
          600: "#563f30",
          700: "#432f23",
          800: "#2f2018",
          900: "#1f150f",
        },
        marble: {
          100: "#ece7e1",
          300: "#b3aaa0",
          500: "#6f665e",
          700: "#3f3832",
          800: "#2c2722",
          900: "#1d1916",
        },
      },
      fontFamily: {
        // Sva tri fonta podržavaju i ćirilicu i latinicu
        display: ['"Ruslan Display"', '"Cormorant Garamond"', "serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Lora"', "Georgia", "serif"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": { transform: "scaleY(1) rotate(-1deg)", opacity: "1" },
          "25%": { transform: "scaleY(1.1) rotate(1.5deg)", opacity: "0.9" },
          "50%": { transform: "scaleY(0.94) rotate(-2deg)", opacity: "1" },
          "75%": { transform: "scaleY(1.06) rotate(1deg)", opacity: "0.86" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.15)" },
        },
        sway: {
          "0%, 100%": { transform: "rotateY(-16deg)" },
          "50%": { transform: "rotateY(16deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 1.6s ease-in-out infinite",
        "flicker-slow": "flicker 2.3s ease-in-out infinite",
        glow: "glow 2.6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
        sway: "sway 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
