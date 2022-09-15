const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '..', './public'),
    },
    compress: true,
    port: 8080,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(
        dotenv.config({ path: path.join(__dirname, `../env.development`) })
          .parsed
      ),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
