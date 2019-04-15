const path = require("path");
module.exports = {
  entry: "./main.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  watch: true
};
