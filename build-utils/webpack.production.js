const path = require("path");
const commonConfig = require("../webpack.config");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Workbox = require("workbox-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "static/js/[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "../build"),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin({
        cache: true
      }),
      new HtmlWebpackPlugin({
        template:  path.resolve(__dirname, "../public/index.html"),
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./static/css/[name].[contentHash].css"
    }),
    new Workbox.GenerateSW({
      swDest: "sw.js",
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [{
        urlPattern: new RegExp('https://yeldev.github.io/homepage/'),
        handler: 'StaleWhileRevalidate'
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
    ],
  }
});