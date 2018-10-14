var webpack = require('webpack');

module.exports = {  
  entry: './app/src/index.js',
  module: 
  {
    loaders: 
    [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: 
        {
          limit: 10000
        }
      }
    ]
  },
  watch: true,
  resolve: 
  {
    extensions: ['.js', '.jsx']
  },
  output: 
  {
    path: __dirname + '/app/build/',
    filename: 'bundle.js',
    publicPath: './app/build/'
  },
  devServer: 
  {
    contentBase: './app/build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}; 