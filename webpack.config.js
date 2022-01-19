const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/images/[name][ext]",
  },

  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(gif|png|jpe?g)$/,
        type: "asset/resource",
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },

  resolve: {
    extensions: ["*", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      template: "./src/index.html",
      filename: "index.html",
      favicon: "./src/assets/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      inject: "head",
      template: "./src/services.html",
      filename: "services.html",
      favicon: "./src/assets/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      inject: "head",
      template: "./src/contact.html",
      filename: "contact.html",
      favicon: "./src/assets/favicon.ico",
    }),
  ],
};
