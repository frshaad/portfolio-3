/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        yellow: '#EEBF63',
        blue: '#90C0E8',
        cyan: '#6FC2C5',
        darkOrange: '#CD921E',
        navyBlue: '#486074',
        darkGreen: '#386163',

        // Tertiary Colors
        white: '#FFFFFF',
        veryLightGrey: '#F1F1F1',
        lightGrey: '#E1E1E1',
        darkGrey: '#828282',
        veryDarkGrey: '#2F2F2F',
        black: '#1C1C1C',
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        25: '25px',
        30: '30px',
        45: '45px',
      },
      content: {
        'showcase-line-vector': 'url("/assets/line-vector.svg")',
        circle: 'url("/assets/circle.svg")',
        'bullet-points': 'url("/assets/bullet-points.svg")',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
};
