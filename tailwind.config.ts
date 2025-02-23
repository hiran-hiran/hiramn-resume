import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },

  plugins: [],
} satisfies Config;
