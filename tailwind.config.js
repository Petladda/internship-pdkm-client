/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sara: ["var(--font-sara)"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000E2F",
        primary: "#69BFFF",
        secondary: "#003CC8",
        danger: "#E00D00",
        success: "#06C755",
        "dark-grey": "#333E59",
        "mid-grey": "#666E82",
        "light-grey": "#999FAC",
        "extar-light-grey": "#CCCFD5",
      },
    },
  },
  plugins: [],
};
