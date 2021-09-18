module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        "input-dark" : "#25273C",
        "bg-light" : "#fafafa",
        "bg-dark" : "#181824"
      }
    },
  },
  variants: {
    extend: {
      opacity:["dark"],
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}