import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#05070d",
        midnight: "#07111f",
        navy: "#092650",
        cobalt: "#1b4d89",
        platinum: "#e8edf4",
        silver: "#aeb8c7",
        gold: "#d9b76e",
        champagne: "#f2dca2"
      },
      boxShadow: {
        glow: "0 0 70px rgba(217, 183, 110, 0.18)",
        blueglow: "0 0 90px rgba(27, 77, 137, 0.35)"
      },
      backgroundImage: {
        "radial-luxury": "radial-gradient(circle at 20% 15%, rgba(27,77,137,.45), transparent 34%), radial-gradient(circle at 78% 0%, rgba(217,183,110,.18), transparent 29%), linear-gradient(145deg, #05070d 0%, #07111f 48%, #020409 100%)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
