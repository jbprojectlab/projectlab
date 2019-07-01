const webpack = require('webpack')
const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  return {
    entry: 'index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|otf|pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                context: 'src',
                name(file) {
                  if (argv.mode !== 'production') {
                    return '[path][name].[ext]'
                  }

                  return '[hash].[ext]'
                }
              },
            },
          ],
        },
        {
          test: /\.ttf$/,
          use: [
            {
              loader: 'ttf-loader',
              options: {
                name: './font/[hash].[ext]',
              },
            },
          ]
        }        
      ]
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, 'src')
      ],
      extensions: [
        '.js',
        '.jsx'
      ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new LodashModuleReplacementPlugin,
      new HtmlWebpackPlugin({
        favicon: 'src/favicon.ico',
        template: 'src/index.html'
      })
    ]
  }
}
