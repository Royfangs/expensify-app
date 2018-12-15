const path = require('path');

// provide the path of current location
// console.log(__dirname);
// console.log(path.resolve(__dirname, 'public/scripts'));

module.exports = {
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
     use: [
       'style-loader',
       'css-loader',
       'sass-loader'
     ]
   }]
 },
 resolve: {
  extensions: ['*', '.js', '.jsx']
},
 devtool: 'cheap-module-eval-source-map',
 devServer: {
   contentBase: path.resolve(__dirname, 'public'),
   historyApiFallback: true
 }
};