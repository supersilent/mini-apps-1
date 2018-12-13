// var HTMLWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//     template: __dirname + '/app/index.html',
//     filename: 'index.html'
// });

module.exports = {
    entry: __dirname + '/client/app.jsx',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        { 
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/public'
    }
  };