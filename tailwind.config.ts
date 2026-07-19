import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand navy — not in Tailwind's default palette, given a full scale for depth.
        navy: {
          50: "#EEF2F8",
          100: "#DCE5F1",
          200: "#B3C5E0",
          300: "#8AA5CF",
          400: "#4C6C9C",
          500: "#2E4E7D",
          600: "#1D3A64",
          700: "#152C4E",
          800: "#0F2444",
          900: "#0D1F3C",
          950: "#081527",
          DEFAULT: "#0D1F3C",
        },
        // teal-600, slate-500 and amber-500 already equal the brand's teal/slate/amber
        // in Tailwind's default palette, so those scales are reused as-is elsewhere.
        offwhite: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0D1F3C 0%, #0D9488 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #0F2444 0%, #0D9488 100%)",
        "glow-teal": "radial-gradient(50% 50% at 50% 50%, rgba(13,148,136,0.35) 0%, rgba(13,148,136,0) 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(13,31,60,0.06), 0 8px 24px rgba(13,31,60,0.08)",
        "card-dark": "0 1px 2px rgba(0,0,0,0.2), 0 12px 32px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
