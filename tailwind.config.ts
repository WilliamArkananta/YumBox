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
        "background-primary": "#F5F5F5",
        "background-brand": "#4E9B51",
        "background-invert": "#424242",
        "content-primary": "#424242",
        "content-brand": "#4E9B51",
        "content-invert": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
