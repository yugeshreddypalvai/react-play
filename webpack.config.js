var path = require('path');

module.exports = {
  mode: "development",
  entry: './src/javascript_es6_features.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /|.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  }
}
