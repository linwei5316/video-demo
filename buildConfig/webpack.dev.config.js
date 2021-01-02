"use strict"

const path = require('path')
const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const baseConfig = require('./webpack.base.config')
const { processEnvGenerator } = require("./utility")

const config = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    historyApiFallback: true,
    port: 6987
  },
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      ...processEnvGenerator({
        ...require('./ENV_DEV'),
      }),
    })
  ]
})

module.exports = config;
