/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        proximaNovaBold: ["fontForTitle", "sans-serif"],
        proximanovaThin:["myFontGrey","sans-serif"],
        robotoRegular:['Roboto',"sans-serif"]
      },
      right:{
        'right-43':'43%'
      },
      colors: {
        'blue-rgba': 'rgba(161, 177, 219, 0.317343)',
        'blue-border':  'rgba(85, 105, 158, 0.3)',
        'yellow-rgba': 'rgba(255, 207, 0, 0.15)',
        'yellow-border': '#FFCF00',
        'grey': '#EFF0F5'
      },
    },
    screens:{
      sm: '640px',
      lg:'800px'
    }
  },
  plugins: [],
}
