/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-image": "url(/assets/background.png)",
      },
      colors: {
        header: "#0B1014",
        primary: "#124C37",
        secondary: "#1F262A",
        link: "#4E98C3",
        status: "#12171B",
        record: "#21C062",
        input: "#1F272A"

      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
};
