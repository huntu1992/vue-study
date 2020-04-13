const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development', //배포는 production
  devtool: 'eval', //개발시는 eval 배포는 hidden-source-map
  resolve: {
    //확장자처리 확장자를 제거하고 import할수있음
    extensions: ['.js', '.vue']
  },
  entry: {
    app: './main.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader' //loader말고 use로해도됨
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'] //loader는 js가 아닌애들을 js로 바꿔주는역할
      }
    ]
  },
  plugins: [new VueLoaderPlugin()], // loader의 부가적인 역할
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  }
};

//vue와 vue-template-compiler의 버전은 일치해야함
