const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

const filename = (extention) =>
  isDev ? `[name].${extention}` : `[name].[hash].${extention}`;

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    "css-loader",
  ];
  // adding loaders to css if they exist
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

console.log("is dev:", isDev);
module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    watchFiles: ["src/*.html"],
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/icons8-globe-96.png"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(), // loaders by defoult
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  // resolve: {
  //   alias: {
  //     "@models": path.resolve(__dirname, "src/models"),
  //     "@": path.resolve(__dirname, "src"),
  //   },
  // },
};
