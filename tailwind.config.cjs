/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll": {
          'from': { transform: "translateY(0%)" },
          'to': { transform: 'translateY(-50%)' },
        },
        "half-disappearing": {
          '0%': { opacity: "0%" },
          '12.5%': { opacity: "100%" },
          '50%': { opacity: "100%" },
          '87.5%': { opacity: "0%" },
          '100%': { opacity: "0%" },
        },
        "inverse-half-disappearing": {
          '0%': { opacity: "100%" },
          '12.5%': { opacity: "0%" },
          '50%': { opacity: "0%" },
          '87.5%': { opacity: "100%" },
          '100%': { opacity: "100%" },
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10S linear infinite',
        'half-disappearing': 'half-disappearing 15S linear infinite forwards',
        'inverse-half-disappearing': 'inverse-half-disappearing 15S linear infinite forwards'
      },
      colors: {
        'eerie': {
          100: '#F4F5F5',
          200: '#EAECEC',
          300: '#C9CFCF',
          400: '#A9B1B1',
          500: '#899494',
          600: '#6B7676',
          700: '#4E5656',
          800: '#303636',
          900: '#121414',
        },
        'folly': '#f60052',
        'snow': '#F5F1F1'
      },
    },
  },
  plugins: []
};