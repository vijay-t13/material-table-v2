const webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", "./demo/demo.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/react", "@babel/preset-env"],
          plugins: ["@babel/proposal-class-properties"],
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./demo",
    hot: true,
    disableHostCheck: true,
  },
};
