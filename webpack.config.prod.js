const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "static/js/[name].[contenthash].js",
    chunkFilename: "static/js/[name].[contenthash].chunk.js"
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
        // Use MiniCssExtractPlugin's loader here so that HtmlWebpackPlugin is able to
        // inject the <link /> tag into the index.html file.
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
      filename: "static/css/[name].[contenthash].css",
      chunkFilename: "static/css/[name].[contenthash].chunk.css"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/*.html"]
          }
        }
      ]
    })
  ]
};
