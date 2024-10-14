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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "fg-primary": "var(--foreground-primary)",
        "fg-tertiary": "var(--foreground-tertiary)",
        "bg-screen": "var(--background-screen)",
        "bg-ui-active": "var(--background-ui-active)",
        "border-ui": "var(--border-ui)",
      },
    },
  },
  plugins: [],
};
export default config;
