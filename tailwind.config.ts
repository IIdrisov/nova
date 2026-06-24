import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        "inter-tight": ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        surface: "hsl(var(--surface))",
        accent: "#fe3e29",
        "accent-purple": "#6e55ff",
      },
      borderRadius: {
        "4xl": "44px",
      },
      maxWidth: {
        content: "1152px",
        page: "1800px",
      },
    },
  },
  plugins: [],
};

export default config;
