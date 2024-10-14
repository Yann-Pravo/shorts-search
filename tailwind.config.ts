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
        "fg-primary-reverse": "var(--foreground-primary-reverse)",
        "fg-tertiary": "var(--foreground-tertiary)",
        "fg-inactive": "var(--foreground-inactive)",
        "bg-screen": "var(--background-screen)",
        "bg-ui-active": "var(--background-ui-active)",
        "border-ui": "var(--border-ui)",
        gradient: {
          from: "var(--gradient-from)",
          stop: "var(--gradient-stop)",
          to: "var(--gradient-to)",
        },
      },
      fontSize: {
        tag: ["10px", "12px"],
        title: ["22px", "28px"],
      },
    },
  },
  plugins: [],
};
export default config;
