module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      linearGradientColors: {
        "blue-yellow": ["to bottom", "#87e6fb", "#ffc05c"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-gradients")],
};
