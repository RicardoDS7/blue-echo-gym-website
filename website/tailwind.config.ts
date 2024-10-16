import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoalBlack: '#2C2C2C',
        metallicGold: '#D4AF37',
        slateGray: '#708090',
        matteSilver: '#BFC1C2',
        richBurgundy: '#800020',
        ivoryWhite: '#F8F5F0',
      },
    },
  },
  plugins: [],
};
export default config;
