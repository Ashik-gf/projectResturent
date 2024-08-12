/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        'jos': ["Josefin Sans"],
        "cormo":["Cormorant", "serif"]
      },
      colors: {
        gray1: '#DEDEDE', // Add your custom color here
        orange: '#E1B168', // Add your custom color here
        black:'#292E36',
        black2:'#555555',
        black3:'#343942',
        orange2:'#FFF8F5'
      },
    },
  },
  plugins: [],
}

