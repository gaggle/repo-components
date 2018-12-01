module.exports = {
  assetsDir: 'tests/fixtures',
  pagePerSection: false,
  sections: [
    {
      name: 'gh',
      components: 'src/components/gh/**/*.js',
    },
    {
      name: 'links',
      components: 'src/components/links/**/*.js',
    },
    {
      name: 'page',
      components: 'src/components/page/**/*.js',
    },
    {
      name: 'repocards',
      components: 'src/components/repocards/**/*.js',
    },
    {
      name: 'misc',
      components: 'src/components/*.js',
    },
  ],
  styleguideDir: 'docs',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    }
  }
}
