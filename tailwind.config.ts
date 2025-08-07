
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        secondary: "#facc15",
        accent: "#10b981",
        neutral: "#1f2937",
        "base-100": "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-great-vibes)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
