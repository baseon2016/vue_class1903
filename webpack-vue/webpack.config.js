// 导入模块，核心模块直接导入, 此外模块还分第三方模块和自定义模块
// webpack的配置文件 webpack.fonfig.js 是webpack的默认配置文件,打包的时候会默认自动找该文件配置
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  // 入口配置
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  // 将环境设置为开发模式 要求速度快
  // 对应有生产模式(production) 要求体积小
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
    hot: true
  },
  // 自动解析以下列为后缀名的扩展
  resolve: {
    extensions: [".js", ".json", ".vue"]
  },
  // module其他模块(包括一些不支持的语法,像vue react框架语法)
  module: {
    rules: [
      // ... other rules
      // rules代表规则
      // rules下面每一条针对的就是一条模块的转化规则
      // 处理vue组件
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // 处理图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name][hash:5].[ext]"
            }
          }
        ]
      },
      //处理css文件和组件内style标签
      //style-loader将模块导出作为样式添加到dom中
      //css-loader解析css文件后,使用Import 导入,并且返回css代码
      // 而且必须注意顺序,从后往前的顺序
      {
        test: /\.css$/,
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
          }
        ]
      }
    ]
  },
  // 插件配置 除了编译不认识的模块之外的功能,基本都属于插件,比如压缩,删除console,注释等
  // VueLoaderPlugin 作用是搭配 vue-loader 用来编译 vue 组件
  // HtmlWebpackPlugin 作用是创建简单的 Html 文件,可以设置html模板用于创建html
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    // 辅助模块热替换 HMR 工作的两个插件,webpack 自带的,不需下载,添加配置即可
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
