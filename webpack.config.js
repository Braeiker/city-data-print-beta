const path = require('path');
const HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, "./src/JS/script.js")
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html")
    })
  ]
};

