module.exports = {
  devServer: {
    // 配置代理服务器解决跨域数据请求问题
    proxy: {
      "/api": {
        // search为转发路径
        target: "https://www.wanandroid.com", // 目标地址
        ws: true, // 是否代理websockets
        changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
