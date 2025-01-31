const path = require('path');

module.exports = {
	entry: './src/app.js', // 기준이 되는 JS 파일
	output: {
		// 번들링을 하는 규칙
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
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
	mode: 'development', // 없으면 warning 이 남
};
