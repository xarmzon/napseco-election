module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e67912',
        },
        secondary: {
          DEFAULT: '#29156e',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    //require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
