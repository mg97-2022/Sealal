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
        primaryMedium: "#473383",
        secondary: "#FEE528",
        secondaryLight: "#F2F5F8",
        secondaryVeryLight: "#fffbed",
        secondaryOverlay: "#FED700", // there is problem with this color
        secondaryDark: "#F0B846",
        greyColor: "#C9C9C9",
        greyLightFirst: "#F6F3F4",
        greyLightSecond: "#9B9B9B",
        greyLightThird: "#F9F9F9",
        greyLightFourth: "#B4B4B4",
        greyLightFifth: "#C7C7C7",
        greyDark: "#333E48",
        greySemiDark: "#676767",
        greySemiDarkSecond: "#646464",
        greyDarkSecondary: "rgba(0, 0, 0, 0.1)",
        lightPink: "#F6F3FF",
        redColor: "#D22B06",
      },
    },
  },
};
