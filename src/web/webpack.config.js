const path = require('path');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const fs = require('fs-extra')

const projectDir = path.resolve(__dirname)
const commonDir =  path.resolve(__dirname+"../../../common/src/web/")

module.exports = {
  entry: projectDir + '/js/index.js',
  devtool: 'source-map',
  mode: 'development',
  output: {
    libraryTarget: 'umd', // make the bundle export
    path: projectDir + '/js/webpack',
    filename: "bundle.js"
  },
  resolve: {
    modules: [projectDir + '/node_modules', projectDir + '/src/', commonDir],
    extensions: ['.json', '.js', '.css']
  },
  plugins: [
    new EventHooksPlugin({
      'initialize': (compilation, done) => {
        console.log('Copying source files to compiled')
        fs.copy(commonDir,  projectDir + '/common' , done);
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};