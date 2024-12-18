module.exports = {
  presets: [ "babel-preset-minify"], // Default preset
   plugins: ["@babel/plugin-transform-parameters"],
  overrides: [
    {
      test: "./tmp/react", // Folder 1 configuration
      presets: ["@babel/preset-react"],
    },
    {
      test: "./tmp/vue", // Folder 2 configuration
      plugins: ["@vue/babel-plugin-jsx"],
    },
  ],
};
