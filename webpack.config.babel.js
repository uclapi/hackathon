const webpack = require('webpack');
const path = require('path');

const BundleTracker = require('webpack-bundle-tracker');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: './src/img/favicon.ico',
    to: './../'
  },
  {
    from: './src/img/social_card.png',
    to: './../'
  },
])

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, './backend/applications/static/js'),
    filename: '[name]-[hash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id]-[contenthash].css'
    }),
    CopyWebpackPluginConfig,
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.HashedModuleIdsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(jpg|png|svg|jpeg)$/,
        loader: 'url-loader'
      },
    ]
  },
  resolve: {
    alias: {
      'Images': path.resolve(__dirname, './src/img'),
      'Layout': path.resolve(__dirname, './src/components/layout'),
      'Styles': path.resolve(__dirname, './src/styles'),
    }
  },
};
