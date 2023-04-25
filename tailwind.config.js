/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      './index.html',
      './slate.html'
  ],
  theme: {
    extend: {
      colors: {
        accentPurple: '#9400d3',
      }
    },
  },
  plugins: [],
}
