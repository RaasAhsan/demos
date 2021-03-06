const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: [
    './src/main.js'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  output: {
    pathinfo: true,
    filename: 'assets/[name].[chunkhash].js',
    publicPath: '/demos/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /(global.css|node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: "[name]__[local]___[hash:base64:5]",
              modules: true,
            },
          }
        ]
      },
      {
        test: /\.css$/,
        include: /(global.css|node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            },
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: 'file-loader'
      },
      {
        test: /\.(vert|frag)$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    })
  ]
};
