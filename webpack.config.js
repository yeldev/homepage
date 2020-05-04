const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  plugins: [
    new CopyPlugin([
        { from: './public/android-icon-192x192.png', to: '' },
        { from: './public/apple-icon-180x180.png', to: '' },
        { from: './public/apple-icon.png', to: '' },
        { from: './public/favicon-96x96.png', to: '' },
        { from: './public/favicon.ico', to: '' },
      ]),
  ],
  module: {
    rules: [
      {
        test:/\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/assets/images"
          }
        }
      },
      {
        test: /\.(ogg|mp3|wav|mpe|mp4)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/assets/sounds"
          }
        }
      }
    ]
  },
}