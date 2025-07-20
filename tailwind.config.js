/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // ✅ Add your HTML file paths here
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Add all JS/TS files in src folder
  ],
  theme: {
    extend: {},             // You can customize the theme here
  },
  plugins: [],              // Add plugins like forms, typography etc. here
}


