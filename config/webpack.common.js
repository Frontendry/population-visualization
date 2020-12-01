const paths = require("./paths");
const commonModules = require("./common-module-loaders");
const commonModulesResolve = require("./common-module-resolve");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  /**
   * Entry
   *
   * The first place Webpack looks to start building the bundle.
   */
  entry: [`${paths.src}/index.js`],

  /**
   * Output
   *
   * Where Webpack outputs the assets and bundles.
   */
  output: {
    path: `${paths.build}/assets/js`,
    filename: "[name].bundle.js",
    //publicPath: "/" ---Orginal Val,
    publicPath: "assets/",
  },
  /**
   * Resolve
   *
   * Resolves 'jQuery and Popper.js module not found' error on webpack.
   */
  resolve: commonModulesResolve,

  /**
   * Module
   *
   * Determine how modules within the project are treated.
   */
  module: {
    rules: [
      /**
       * JavaScript
       *
       * Use Babel to transpile JavaScript files.
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      /**
       *
       * Expose jQuery to other scripts - Resolving 'jQuery is undefined' error on console.
       */

      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: [
            {
              globalName: "$",
              override: true,
            },
            {
              globalName: "jquery",
              override: true,
            },
            {
              globalName: "jQuery",
              override: true,
            },
          ],
        },
      },

      {
        /* test: require.resolve(`${paths.src}/vendor/datatables/datatables.min`), */
        test: /datatables\.net.*/,
        use: [
          {
            loader: "imports-loader",
            options: {
              additionalCode: "var define = false;",
            },
          },
        ],
      },
    ],
  },
};
