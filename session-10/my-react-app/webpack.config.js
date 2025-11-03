const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-eval'; connect-src 'self' http://localhost:3000;",
    },
    historyApiFallback: true,
  },
  //   // Enable source maps for easier debugging in development mode
devtool: "inline-source-map",

//   // Define the mode (development or production)
mode: "development", // Switch to 'production' for production builds

};







  // Plugins for additional functionality
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./public/index.html", // Use your own HTML template
 

//   // Webpack Dev Server for local development
//   devServer: {
//     static: "./dist",
//     port: 9000, // Server will be hosted at http://localhost:9000
//     open: true, // Opens the browser after server has started
//   },

//   // Enable source maps for easier debugging in development mode
//   devtool: "inline-source-map",

//   // Define the mode (development or production)
//   mode: "development", // Switch to 'production' for production builds
// };

