/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    function ({ addBase }) {
      addBase({
        ".el-button": {
          "background-color": "var(--el-button-bg-color,var(--el-color-white))",
        },
      });
    },
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
