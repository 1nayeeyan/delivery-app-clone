/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            "./App.{js,jsx,ts,tsx}", 
            "./screens/**/*.{js,jsx,ts,tsx}",
            "./HomeScreen/**/*.{js,jsx,ts,tsx}",
            "./pages/**/*.{js,jsx,ts,tsx}",
            "./content/**/*.{js,jsx,ts,tsx}"
          ],
  theme: {
    extend: {},
  },
  plugins: [],
}
