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
        primary: '#003B5C',
        primaryLight: 'var(--primary-light)',
      },
      padding: {
        '50': '12.5rem',
      },
      transistionDuration: {
        '1000': '1000ms',
      },
      width: {
        'half': '50%',
        "third": "33.33%"
      },

    },
  },
  plugins: [],
} satisfies Config;
