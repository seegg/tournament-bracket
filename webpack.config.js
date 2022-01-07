const path = require('path');

module.exports = {
  entry: ['./scripts/index.tsx'],
  output: {
    path: path.join(__dirname, 'script'),
    filename: 'bundle.js'
  },
  watch: true,
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
  resolves: ['.js', '.jsx', '.tx', '.tsx', '.json'],
  devtool: 'source-map',
}