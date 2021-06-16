const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/i,
        use: ["source-map-loader", "babel-loader", "ts-loader"]
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: "./public/index.html" }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[name].chunk.css"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    hot: true,
    compress: true,
    open: true,
    watchContentBase: true,
    historyApiFallback: true
  }
};
