/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll": {
          'from': { transform: "translateY(0%)" },
          'to': { transform: 'translateY(-50%)' },
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10S linear infinite'
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