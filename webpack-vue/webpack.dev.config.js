const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const webpack = require("webpack");

module.exports = merge(common, {
  // 将环境设置为开发模式 要求速度快
  mode: "development",
  //开发模式下使用什么工具编译打包
  devtool: "eval",
  // devServer 作用是提供简单的服务器,并且能够 实时重新加载
  devServer: {
    // 服务器地址文件夹
    contentBase: "./dist",
    compress: true,
    // 手动设置端口号,但是有弊端,如果此端口被占用服务器会起不来,去掉port设置会默认打开8080,端口如果被占用,会换成8081,以此类推
    port: 9000,
    // 启用HMR 热模块替换
    hot: true,
    // 清除大量显示的 HMR 提示log信息
    clientLogLevel: "none",
    //再次服务器下所有地址都指向 index.html,单页面应用必须设置此项
    historyApiFallback: true
  },
  // module其他模块(包括一些不支持的语法,像vue react框架语法)
  module: {
    rules: [
      //处理css文件和组件内style标签
      //style-loader将模块导出作为样式添加到dom中
      //css-loader解析css文件后,使用Import 导入,并且返回css代码
      // 而且必须注意顺序,从后往前的顺序
      {
        test: /\.css|.scss$/,
        use: [
          "style-loader",
          "css-loader",
          // options是 postcss-loader的配置 也可以直接在项目的根目录下新建一个postcss.config.js 去配置
          {
            loader: "postcss-loader",
            options: {
              // plugins 是插件配置 我们vue组件样式的 scope属性其实是新的css写法,需要插件postcss-cssnext插件解析
              plugins: [require("postcss-cssnext")()]
            }
          },
          // sass-loader将sass 编译成css 需要配合node-sass使用
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]
  },
  plugins: [
    // 辅助模块热替换 HMR 工作的两个插件,webpack 自带的,不需下载,添加配置即可
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
