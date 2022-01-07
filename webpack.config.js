const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  entry: ['./scripts/index.tsx'],
  output: {
    path: path.join(__dirname, 'scripts'),
    filename: 'bundle.js'
  },
  // watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tx', '.tsx', '.json'],
  },
  devtool: 'source-map',
}