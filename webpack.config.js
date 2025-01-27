const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      {
        test: /\.(pdf|gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.ejs',
      filename: 'index.html',
      favicon: 'static/images/favicon.ico',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    publicPath: '/',
    compress: true,
    historyApiFallback: {
      rewrites: [{ from: /^\/[A-Za-z-]+$/, to: '/index.html' }],
      index: 'index.html',
    },
  },
};
