const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');

module.exports = {
	entry: './src/app.js', // 기준이 되는 JS 파일
	output: {
		// 번들링을 하는 규칙
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[contenthash].js',
	},
	module: {
		rules: [
			//.css .js 등 서로 다른 확장자를 가진 파일을 처리할 때 어떤 규칙을 적용할지 정의
			{
				test: /\.js$/, // 어떤 파일을 대상으로 할지 정규표현식으로 작성
				exclude: /node_modules/, // node_modules 폴더는 제외
				use: {
					loader: 'babel-loader', // babel-loader를 사용
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
		}),
		new DotenvWebpack({
			path: `./.env.${process.env.NODE_ENV || 'development'}`,
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'), // 파일이 위치한 폴더
		},
		port: 9000,
		open: true,
		hot: true, // 저장하면 바로 반영
	},
	mode: 'development', // 없으면 warning 이 남
};
