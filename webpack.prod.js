const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
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
              mozjpeg: {
                progressive: true,
                quality: 80,
              },
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
    new CopyPlugin([
      {
        from: 'static/redirect.ejs',
        to: 'amenities/index.html',
        toType: 'file',
      },
      {
        from: 'static/redirect.ejs',
        to: 'experience/index.html',
        toType: 'file',
      },
      {
        from: 'static/redirect.ejs',
        to: 'location/index.html',
        toType: 'file',
      },
      {
        from: 'static/redirect.ejs',
        to: 'floor-plans/index.html',
        toType: 'file',
      },
      { from: 'static/redirect.ejs', to: 'gallery/index.html', toType: 'file' },
      {
        from: 'static/redirect.ejs',
        to: 'residents/index.html',
        toType: 'file',
      },
      { from: 'static/redirect.ejs', to: 'contact/index.html', toType: 'file' },
    ]),
  ],
};
