const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  entry: "./src/main.js",
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".json", ".vue"]
  },
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
              name: "img/[name][hash:5].[ext]"
            }
          }
        ]
      }
    ]
  }
};
