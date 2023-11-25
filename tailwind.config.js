/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      primaryTextColor:"#331A15",
      secondaryTextColor:"#1B1A1A",
      cardBgColor:"#F5F4F1",
      formBgColor:"#F4F3F0",
      buttonColor:"#E3B577",
      contactBgColor:"#f8f8f8"
    },
    backgroundImage: {
      headerBg: "url(./public/images/more/15.jpg)",
      logoBg: "url(./public/images/more/logo1.png)",
      heroBg:"url(./public/images/more/17.jpg)",
    },
    extend: {},
  },
  plugins: [],
};
