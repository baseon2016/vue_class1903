const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = merge(common, {
  // 对应有生产模式(production) 要求体积小
  mode: "production",
  // module其他模块(包括一些不支持的语法,像vue react框架语法)
  module: {
    rules: [
      //split css 分离CSS为文件时,官方能看到的是ExtractTextWebpackPlugin 但是下完之后按照文档提示不生效,所以换成了MiniCssExtractPlugin
      //MiniCssExtractPlugin.loader将CSS.loader导出的css分离出去放到css文件内
      {
        test: /\.css|.scss$/,
        use: [
          // 当使用了split css 插件分离css,style-loader可以不写了
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader
          },
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
    //针对用户环境,进行代码优化,此插件是webpack内置插件,不需下载
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "css/[id].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
      publicPath: "/css"
    })
  ]
  // 压缩代码，此功能使用不成功,待更新
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       include: /\/includes/
  //     })
  //   ]
  // }
});
