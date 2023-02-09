/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx', './src/**/*.css'],
  theme: {
    screens: {
      md: '850px',
    },
    extend: {
      colors: {
        primarySoftCyan: 'hsl(174, 77%, 80%)',
        primaryStrongCyan: 'hsl(174, 86%, 45%)',
        primaryLGraishRed: 'hsl(14, 92%, 95%)',
        primaryLightRed: 'hsl(15, 100%, 70%)',
        primaryPaleBlue: 'hsl(226, 100%, 87%)',
        neutralVeryPaleBlue: 'hsl(230, 100%, 99%)',
        neutralAGrayishBlue: 'hsl(223, 50%, 87%)',
        neutralBGrayishBlue: 'hsl(223, 50%, 87%)',
        neutralGrayishBlue: 'hsl(225, 20%, 60%)',
        neutralDesaturatedBlue: 'hsl(227, 35%, 25%)',
      },
      fontFamily: {
        monrope: ['Monrope', 'sans-serif'],
      },
      backgroundImage: {
        design: "url('./src/assets/images/bg-pattern.svg')",
        circle: "url('./src/assets/images/pattern-circles.svg')",
      },
    },
  },
  plugins: [],
};
