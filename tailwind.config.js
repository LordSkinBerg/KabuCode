/** @type {import('tailwindcss').Config} */
module.exports = {
  // if you are not using dark mode at all you can omit or set darkMode to false:
  // darkMode: false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // … any other paths where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        // define your brand color here:
        primary: '#1e40af',   // ← pick the hex/RGB you want
      },
    },
  },
  plugins: [],
}
