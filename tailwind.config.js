module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      // Dracula color palette
      colors: {
        drBackground: "#282a36",
        drCurrentLine: "#44475a",
        drForeGround: "#f8f8f2",
        drComment: "#6272a4",
        drCyan: "#8be9fd",
        drGreen: "#50fa7b",
        drOrange: "#ffb86c",
        drPink: "#ff79c6",
        drPurple: "#bd93f9",
        drRed: "#ff5555",
        drYellow: "#f1fa8c",

        // Light mode
        lightBackground: "#e6e7ee",
        textHeadBlack: "#31344b",
        textBlack: "#44476A",
        goodGray: "#b2becd",
        grayOnWhite: "#454e56",

        // other colors
        androidGreen: "#3ddc84",
        js: "#f0db4f",
        jsDark: "#323330",

        cssDark: "#264de4",
        css: "#2965f1",

        react: "#61DBFB",

        pink: "#ff4088",
        orange: "#fa8142",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
