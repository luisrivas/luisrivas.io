import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1248px',
      },
      colors: {
        black: 'rgb(33, 33, 33)',
        gray: 'rgb(72, 72, 72)',
        white: 'rgb(249, 249, 249)',
      },
    },
  },
  plugins: [],
};
export default config;
