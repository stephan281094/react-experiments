var path = require('path')
var webpack = require('webpack')
var entry = ['./src/index']

if (process.env.NODE_ENV !== 'production') {
  entry = entry.concat(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  )
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
}
