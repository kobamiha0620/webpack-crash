const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
 entry:'./src/index.js',
 output: {
	filename:'main.js',
	path: outputPath
},
module: {
	rules:[
		{
		test:/\.css$/ ,
		use:[
		'style-loader',
		'css-loader'
		]
		},
		{
			test:/\.scss$/ ,
			use:[
			'style-loader',
			'css-loader',
			'sass-loader'
			]
			},
		{
		test:/\.(jpe?g|png|gif|icon|svg)$/i,
		loader: 'url-loader',
		options:{
		limit: 2048,
		name: './image/[name].[ext]'		
}
		}
	]


},
devServer: {       
    static: {
		directory: path.join(__dirname, "dist"),
	  }
	  //ブラウザに表示する設定 webpack-dev-server
}


}
