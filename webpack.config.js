const path = require('path');
require('style-loader')
require('css-loader')
require('sass-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./source/sass/2017/style.scss'],
    output: {
        path: path.resolve(__dirname, 'source/css'),
        filename: 'bundle.css'
      },
      plugins: [
        new MiniCssExtractPlugin(),
      ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
  };