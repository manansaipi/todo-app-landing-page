/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // slate-950
        foreground: "#f8fafc", // slate-50
        primary: "#3b82f6", // blue-500
        secondary: "#8b5cf6", // violet-500
        accent: "#0ea5e9", // sky-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
