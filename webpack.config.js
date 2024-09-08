const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outDir = 'lib';

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const devtool = mode === 'development' ? 'inline-source-map' : 'none';
  const entry = './src/index.ts';
  return ({
    mode,
    devtool,
    entry,
    output: {
      path: path.join(__dirname, outDir),
      filename: `index.js`
    },
    devServer: {
      port: 8800,
      static: { // this is for making hosting on github pages a breez for relative paths 
        directory: path.join(__dirname, './'),
        publicPath: '/' 
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?|.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './index.html')
      }),
    ]
  })
}