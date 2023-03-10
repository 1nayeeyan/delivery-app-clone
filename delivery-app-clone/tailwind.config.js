/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            "./App.{js,jsx,ts,tsx}", 
            "./screens/HomeScreen.js/**/*.{js,jsx,ts,tsx}", 
            "./components/**/*.{js,jsx,ts,tsx}",
            "./components/Categories/**/*.{js,jsx,ts,tsx}",
            "./content/**/*.{js,jsx,ts,tsx}"
          ],
  theme: {
    extend: {},
  },
  plugins: [],
}
