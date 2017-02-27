module.exports = {
  devtool: 'inline-sourcemap',
  entry: './src/index.js',
  output: {
    filename: './src/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ]
      }
    ]
  }
};