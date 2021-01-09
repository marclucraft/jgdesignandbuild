// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    extend: {
      colors: {
        jg: {
          'lg': '#545454',
          'dg': '#3f3f3f',
          'tg': '#808080',
          'green': '#95a380',
          'gold': '#d4bb7e',
        }
      }
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"]
    }
  },
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
};
