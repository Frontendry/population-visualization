const paths = require("./paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
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

    /**
     * Styles
     *
     */
    {
      test: /\.(scss|css)$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: (resourcePath, context) => {
              // publicPath is the relative path of the resource to the context
              // e.g. for ./css/admin/main.css the publicPath will be ../../
              // while for ./css/main.css the publicPath will be ../
              return (
                paths.pathModule.relative(
                  paths.pathModule.dirname(resourcePath),
                  context
                ) + "/"
              );
            },
          },
        },

        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          },
        },
        "postcss-loader",
        "sass-loader",
      ],
    },

    /**
     * Fonts
     *
     * Inline font files.
     */
    {
      test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      loader: "url-loader",
      options: {
        limit: 8192,
        // If you want to see where the file is coming from, add [path] before [name]
        name: "[name].[ext]",
        outputPath: "../fonts/",
        context: "src", // prevent display of src/ in filename
      },
    },
  ],
};
