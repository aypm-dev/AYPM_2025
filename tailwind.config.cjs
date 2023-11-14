/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      keyframes: {
        "infinite-scroll": {
          'from': { transform: "translateY(0%)" },
          'to': { transform: "translateY(-50%)" },
        },
        "infinite-scroll-horizontal": {
          'from': { transform: "translateX(0%)" },
          'to': { transform: "translateX(-100%)" },
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
        },
        "jump-and-bounce": {
          '1.5%': { transform: "translateY(-50%) scale(0.9, 1.1)" },
          '20%': { transform: "translateY(0%) scale(1.1, 0.9)" },
          '40%': { transform: "translateY(-25%) scale(0.95, 1.05)" },
          '60%': { transform: "translateY(0%) scale(1.05, 0.95)" },
          '80%': { transform: "translateY(-12.5%) scale(0.975, 1.025)" },
          '100%': { transform: "translateY(0%) scale(1, 1)" },
        },
        "spin-forwards": {
          "to": { transform: "rotate(360deg);"}
        },
        "random-jumps": {
          '6.95%': { transform: "translateY(0%) scale(1, 1);" },
          '7%': { transform: "translateY(-80%) scale(0.9, 1.1)" },
          '7.32%': { transform: "translateY(0%) scale(1, 1);"},
          
          '15%': { transform: "translateY(0%) scale(1, 1);"},
          '15.05%': { transform: "translateY(0%) scale(-1, 1);"},

          '31.95%': { transform: "translateY(0.01%) scale(-1.01, 1);" },
          '32%': { transform: "translateY(-80%) scale(-0.9, 1.1)" },
          '32.32%': { transform: "translateY(0%) scale(-1, 1);"},
          
          '39.95%': { transform: "translateY(0) scale(-1, 1);" },
          '40%': { transform: "translateY(-80%) scale(-0.9, 1.1)" },
          '40.32%': { transform: "translateY(0%) scale(-1, 1);"},
          
          
          '50%': { transform: "translateY(0%) scale(-1, 1);"},
          '50.05%': { transform: "translateY(0%) scale(1, 1);"},
          '52%': { transform: "translateY(0%) scale(1.01, 1);"},
          '52.05%': { transform: "translateY(0%) scale(-1, 1);"},


          '87.95%': { transform: "translateY(0.01%) scale(-1, 1);" },
          '88%': { transform: "translateY(-80%) scale(-0.9, 1.1)" },
          '88.32%': { transform: "translateY(0%) scale(-1, 1);"},

          
          '99%': { transform: "translateY(0%) scale(-1, 1);"},
          '99.05%': { transform: "translateY(0%) scale(1, 1);"},
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10S linear infinite',
        'half-disappearing': 'half-disappearing 15S linear infinite forwards',
        'infinite-scroll-horizontal': 'infinite-scroll-horizontal 15S linear infinite forwards',
        'inverse-half-disappearing': 'inverse-half-disappearing 20S linear infinite forwards',
        'jump-and-bounce': 'jump-and-bounce 0.75S cubic-bezier(.5, 0.05, 1, .5) forwards',
        'random-jumps': 'random-jumps 44S cubic-bezier(.5, 0.05, 1, .5) infinite forwards',
        'spin-forwards': "spin-forwards 1s linear infinite forwards",
        'spin-slow-forwards': "spin-forwards 5s linear infinite forwards"
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
          900: '#020404',
        },
        'folly': '#f60052',
        'snow': '#F5F1F1'
      },
    },
  },
  plugins: []
};