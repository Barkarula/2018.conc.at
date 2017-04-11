const webpackMerge = require('webpack-merge')
const commonConfig = require('./base')

module.exports = function() {
  return webpackMerge(commonConfig(), {
    devtool: 'cheap-module-source-map'
  })
}
