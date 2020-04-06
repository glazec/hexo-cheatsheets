const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
require('style-loader')
require('css-loader')
require('sass-loader')

module.exports = {
    mode:'development',
    entry: ['./source/sass/2017/style.scss'],
    output: {
        path: path.resolve(__dirname, 'source/css'),
        filename: 'bundle.css'
      },
      plugins: [
        new MiniCssExtractPlugin(),
        // new WebpackShellPlugin({onBuildEnd:['npx purgecss --output source/css/ --content ../../public/*.html ../../public/**/*.html source/js/*.js --css source/css/main.css']})
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