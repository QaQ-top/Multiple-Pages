const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { html } = require('./routes');


module.exports = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    linkType: 'text/css',
    filename: 'css/[name].[chunkhash].css'
  }),
  ...html,
]