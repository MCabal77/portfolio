/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        BG_COLOR: '#232946',
        H_COLOR: '#fffffe',
        P_COLOR: '#b8c1ec',
        BTN_COLOR: '#eebbc3',
        BTN_COLOR_DARKER: '#eb94a1',
        BTN_TXT: '#232946',
        STROKE_COLOR: '#121629',
        STROKE_COLOR_LIGHTER: '#3d3f47',
        MAIN_COLOR: '#b8c1ec',
        MAIN_COLOR_DARKER: '#92a1e8',
        HIGHLIGHT_COLOR: '#eebbc3',
        SECONDARY_COLOR: '#fffffe',
        TERTIARY_COLOR: '#eebbc3',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
