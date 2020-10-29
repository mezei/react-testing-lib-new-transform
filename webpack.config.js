const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  return {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.js', '.jsx'],
          },
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
    },
    devServer: {
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
    ],
  }
}
