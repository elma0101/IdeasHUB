/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1A212B', //Main background color
        'card': '#232C3A', //Card background color
        'primary': '#3B82F6', //Blue for buttons/highlights
        'secondary': '#9CA3AF', //Lighter gray text
        'accent': '#FBBF24', //Yellow for levels
        'border-color': '#374151', //Border color for cards/dividers
      }
    },
  },
  plugins: [],
}

