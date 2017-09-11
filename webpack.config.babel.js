import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import BundleTracker from 'webpack-bundle-tracker';


const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: './src/img/favicon.ico',
    to: './../'
  },
])

export default () => ({
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './backend/applications/static/js'),
    filename: '[name]-[hash].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(jpg|png|svg)$/, loader: 'url-loader' },
    ],
  },
  plugins: [
    CopyWebpackPluginConfig,
    new BundleTracker({filename: './webpack-stats.json'}),
  ]
});
