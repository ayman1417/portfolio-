/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/theme");

export default {
  content: [
    {
      transform: (content) => content.replace(/taos:/g, ''),
      relative: true,
    },
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/button.js",
    "./node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js",
  ]
  ,
  theme: {
    extend: {
      colors: {
        main: "#ff7b00",
        back: "#0d0d0d",
        text: "#ffce6d",
        nav: "#a1450b",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
