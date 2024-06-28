/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
        colors: {
            'main-bg': '#FFC2EE',
            'main-fg': '#140A4F',
            'main-accent': '#FFFDC7',
            'main-button': '#715BF4',
        },
        fontFamily: {
            ebgaramond: ["EB Garamond", "serif"],
        },
        fontSize: {
            '10xl': '7.188rem',
            '11xl': '10rem',
            '12xl': '10.188rem',
            '13xl': '16.563rem',
        },
    },
  },
  plugins: [],
}

