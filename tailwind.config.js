/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Defining the primary color accents based on the Design System
        primary: {
          teal: '#00B894', // A good representation for bg-teal-500
          blue: '#3b82f6', // A good representation for bg-blue-500
        }
      }
    },
  },
  plugins: [],
}