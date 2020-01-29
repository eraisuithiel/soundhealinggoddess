const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              outputPath: 'img',
              name: '[name].[ext]'
            },
          },
        ],
      },
      {
        test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/contact.html",
      filename: "./contact.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/services.html",
      filename: "./services.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    })
  ]
}