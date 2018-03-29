var path = require('path');

module.exports = {
  entry: {
    app: './app/main.js',
    eeaas: './app/eeaas.js',
    'eeaas-snake': './app/eeaas-snake.js',
    'eeaas-nyancat': './app/eeaas-nyancat.js'
  },

  watch: true,

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static')
  },

  module: {
    loaders: [
      {
        test: /\.hbs/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.(s)?css/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap&localIdentName=[name]__[local]__[hash:base64:5]',
          'sass-loader?sourceMap'
        ]
      }
    ]
  }
};
