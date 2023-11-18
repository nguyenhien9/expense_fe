/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        primary: "#3AAED8",
        gray: "#7A7978",
        red: "#DE6449",
        buff: "#407899",
        green: "#8BBF9F",
        dark: "#162938",
        blue: "rgba(46, 138, 177, 0.2)",
        "white-a": "rgba(255,255,255,.2)",
      },
      fontSize: {
        xs: "12px",
        sm: "16px",
      },
      backgroundColor: {
        card: "rgba(255,255,255,.2)",
      },
      backgroundImage: {
        "main-bg": "url('/src/assets/images/background.jpg')",
      },
      boxShadow: {
        box: "rgb(22 78 99) 2px 0px 25px ",
      },
    },
  },
  plugins: [],
};
