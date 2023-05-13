/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#232862",
        primaryLight: "#5D3D8C",
        primaryVeryLight: "#393e72",
        secondary: "#FEE528",
        secondaryLight: "#F2F5F8",
        secondaryVeryLight: "#fffbed",
        secondaryOverlay: "#FED700", // there is problem with this color
        greyLightFirst: "#F6F3F4",
        greyLightSecond: "#9B9B9B",
        greyDark: "#333E48",
      },
      // fontSize: {
      //   "15px": "15px",
      // },
    },
  },
  // plugins: [],
};
