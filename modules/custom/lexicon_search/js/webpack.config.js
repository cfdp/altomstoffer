const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "whatwg-fetch", "./app/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
