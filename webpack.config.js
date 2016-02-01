//webpack.config.js
var path=require("path");

module.exports={
	entry:  "./public/javascripts/entry.js",
	output: {
		path: path.join(__dirname,"./public/out"), //打包输出的路径
		filename: "bundle.js",                  //打包后的名字
		publicPath: "./public/out/"
	},
	//*大于8KB的图片不会被打包，所以一般会被打包的都是一些css文件引入的icon图标或者logo什么的
	//在对模块捆绑打包的过程中会对文件的后缀名进行检测，然后进行相应的预处理
	module: {
	          loaders: [
		            {test: /\.js$/, loader: "babel",query: {presets: ['react','es2015']}},	 	/*es6 to es5*/
		            {test: /\.jsx$/,loader: 'babel', query: {presets: ['react', 'es2015']}},	/*jsx to js,es5 to es6*/
		            {test: /\.css$/, loader: "style!css"},					 	/*css to css*/
		            {test: /\.(jpg|png|otf)$/, loader: "url?limit=8192"},			 	/*images 打包*/
		            {test: /\.scss$/, loader: "style!css!sass"}				 	/*sass to css*/
	          ]
    	}
};