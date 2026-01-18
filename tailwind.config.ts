import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d8ecff",
          200: "#b6dbff",
          300: "#8bc4ff",
          400: "#5aa6ff",
          500: "#2d86ff",
          600: "#1469f0",
          700: "#0f52c7",
          800: "#123f99",
          900: "#133574"
        }
      }
    }
  },
  plugins: []
};
export default config;
