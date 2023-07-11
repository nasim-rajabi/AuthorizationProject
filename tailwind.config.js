/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white' : 'rgb(255 255 255)',
      'green': '#24a495',
      'textColor' : '#111827',
      'red' : '#ef4444',
      'borderColor' : '#d6d3d1',
      'blue' : '#6366f1',
      'backColor' : '#1e293b',
      'yellow' : '#facc15',
      'backGreen' : '#052e16',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/image/image.jpg')",
      }
  },
  plugins: [],
}}
