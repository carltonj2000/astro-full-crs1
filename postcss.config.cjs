module.exports = {
  plugins: [
    require("tailwindcss/nesting"),
    require("postcss-preset-env")({ stage: 0 }),
  ],
};
