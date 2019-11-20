// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem"
      }
    }
  },
  variants: {
    borderStyle: ["responsive", "hover", "focus"],
    width: ["responsive", "hover", "focus"]
  },
  plugins: []
};
