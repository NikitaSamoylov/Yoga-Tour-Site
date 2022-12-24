const FileManagerPlugin = require('filemanager-webpack-plugin');

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",

  plugins: [
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist']
        }
      }
    })
  ]
};