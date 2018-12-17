const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// provide the path of current location
// console.log(__dirname);
// console.log(path.resolve(__dirname, 'public/scripts'));

module.exports = (env) => {
  const isProductioon = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader'
         }
      }, {
        test: /\.(scss|css)$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    resolve: {
     extensions: ['*', '.js', '.jsx']
   },
   plugins: [
    CSSExtract
   ],
    devtool: isProductioon ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true
    }
   };
};