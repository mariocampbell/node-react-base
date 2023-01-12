const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: path.join(__dirname, '/app/index.js'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'js/main.js',
    publicPath: '/',
    assetModuleFilename: 'assets/img/[hash][ext][query]',
  },
  // resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: [
                  'last 2 versions',
                  'not dead',
                  '> 0.2%',
                  'not ie 11',
                ],
                debug: true,
                useBuiltIns: 'entry',
                corejs: 3,
              }],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Api REST with Nodejs and React',
    //   filename: 'index.html',
    //   template: 'app/index.html',
    // }),
  ],
};
