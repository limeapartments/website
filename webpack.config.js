const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'babel-loader' },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    publicPath: '/',
    compress: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
