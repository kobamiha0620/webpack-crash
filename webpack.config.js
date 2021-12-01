const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const outputPath = path.resolve(__dirname, 'dist');


module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: outputPath
	},
	module: {
		rules: [{
				test: /\.m?jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpe?g|png|gif|icon|svg)$/i,
				loader: 'url-loader',
				options: {
					limit: 2048,
					name: './image/[name].[ext]'
				}
			},

			{
				test: /\.html$/,//対象の拡張子を設定
				loader: 'html-loader'//loaderの設定
			}

		]


	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		}
		//ブラウザに表示する設定 webpack-dev-server
	},
	//プラグインの設定
	plugins:[
		new HtmlWebpackPlugin({
			template: './src/index.html',  //雛形ファイル
			filename: './index.html' //雛形ファイルを最終的に出力先と出力名
		})
	]
	

}