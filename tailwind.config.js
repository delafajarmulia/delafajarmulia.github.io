/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.08)",
        "glass-border": "rgba(255,255,255,0.15)",
        "glass-hover": "rgba(255,255,255,0.13)",
        accent: "#a78bfa",
        "accent-2": "#60a5fa",
        "accent-3": "#34d399",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 20% 50%, rgba(167,139,250,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(96,165,250,0.12) 0%, transparent 60%), radial-gradient(ellipse at 60% 80%, rgba(52,211,153,0.08) 0%, transparent 50%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
