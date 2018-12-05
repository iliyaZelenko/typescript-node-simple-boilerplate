/* You could of course use only babel, for TS this is https://babeljs.io/docs/en/babel-preset-typescript https://babeljs.io/setup#installation */

const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  externals: [
    nodeExternals()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    /**
     * So we say *nix systems,
     * that the interpreter of our JavaScript file should be /usr/bin/env node,
     * which searches for a locally installed node executable.
     */
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })
  ]
}


