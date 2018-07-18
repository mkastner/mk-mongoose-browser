module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/i,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    // Replace these Node.js native modules with empty objects, Mongoose's
    // browser library does not use them.
    // See https://webpack.js.org/configuration/node/
    dns: 'empty',
    fs: 'empty',
    'module': 'empty',
    net: 'empty',
    tls: 'empty'
  },
  mode: 'production',
  target: 'web'
};
