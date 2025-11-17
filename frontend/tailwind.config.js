/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#dc2626',
          black: '#0a0a0a',
          gray: '#111827'
        }
      }
    },
  },
  plugins: [],
}
