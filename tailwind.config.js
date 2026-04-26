/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#ced9fd',
          300: '#a1b7fa',
          400: '#6d8df5',
          500: '#3b66f1',
          600: '#254adb',
          700: '#1d3ab9',
          800: '#1c3395',
          900: '#1b2d7a',
          950: '#111a4a',
        },
      },
    },
  },
  plugins: [],
}
