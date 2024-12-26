import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
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
      },
      animation: {
        fade: "fadeIn .3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0%", transform: "translateY(10px)" },
          to: { opacity: "100%", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
