const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const dotenv = require('dotenv')
const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(
        dotenv.config({ path: path.join(__dirname, `../env.production`) }).parsed
      ),
    }),
    new BundleAnalyzerPlugin(),
  ],
}
