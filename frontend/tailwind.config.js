/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark-blue": "#222831",
        "custom-dark-orange": "#FFD369",
        "custom-dark-or": "#393E46",
        "custom-dark-ora": "#EEEEEE",
      },
    },
  },
  plugins: [],
};
