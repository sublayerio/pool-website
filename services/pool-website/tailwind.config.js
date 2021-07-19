const colors = require("tailwindcss/colors");

const primaryColor = {
  ...colors.green,
  600: "#188001",
  700: "#188001",
};

const secondaryColor = {
  ...colors.yellow,
};

module.exports = {
  purge: {
    // enabled: process.env.ENVIRONMENT === "production",
    content: [
      // This is not present inside the default configuration
      // but it's good to build your production application
      // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
      "./pages/**/*.js",
      // "./components/**/*.js",
      "./src/**/*.js",
      "./src/app/**/*.js",
    ],
  },
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
