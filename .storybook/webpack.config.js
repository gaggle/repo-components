const path = require('path')

const repoRoot = path.resolve(__dirname, '../')

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.module.rules.push({
    test: /\.scss$/,
    exclude: /(node_modules)/,
    include: repoRoot,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  })

  return defaultConfig
}
