import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';


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
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(jpg|png|svg)$/, loader: 'url-loader' },
    ],
  },
  plugins: [CopyWebpackPluginConfig]
});
