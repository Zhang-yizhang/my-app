module.exports = {
  // 关闭eslint
  lintOnSave: false,
  // 配置跨域
  devServer: {
    proxy: {
      "/api": {
        // 凡是以"/api"开头的地址，用target地址进行替换
        target: "http://39.98.123.211/"
      }
    }
  }
};
