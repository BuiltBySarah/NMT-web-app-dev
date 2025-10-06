const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
      // part of activity 1
      {
        test: /\.css$/, // Match any .css file
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Turns CSS into CommonJS
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image files
        type: "asset/resource", // Asset modules for static files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000, // Server will be hosted at http://localhost:3000
    open: true, // Opens the browser after server has started
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

