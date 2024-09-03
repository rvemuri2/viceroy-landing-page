/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#D3CBB8", // Choose a beige color close to the image's background
      },
    },
  },
  plugins: [],
};
