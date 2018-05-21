const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
        },
        {
            test: /\.less$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'less-loader'
            }],
        },
        {
          test: /\.css$/,
          use: 'csslint-loader',
        },
        ],

  },
};
