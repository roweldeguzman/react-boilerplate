const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/index'
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://api.com',
        secure: true,
        changeOrigin: true
      },
    },
    publicPath: '/public',
    hot: true
  },
	output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/public'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'source-map',
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
	],
	module: {

		rules: [
			{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },
      
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      },
      
      {
        test: /node_modules.*\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      
      {
        test: /.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg|gif)$/,
        use: 'url-loader?limit=100000'
      }
		]
	}
};