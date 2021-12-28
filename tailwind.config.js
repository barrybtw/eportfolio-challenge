module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(35, 39, 65)",
        nasa: "#033A92",
        form: "#363940",
      },
      fontSize: {
        enormus: "17rem",
      },
      keyFrames: {
        scrollText: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        textScroll: "scrollText 33s infinite linear",
      },
      transitionTimingFunction: {
        scroll: "all 1s ease",
      },
    },
  },
  plugins: [],
};
