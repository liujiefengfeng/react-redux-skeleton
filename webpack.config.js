const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(jsx|js)$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};