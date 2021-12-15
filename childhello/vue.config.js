const { name } = require('./package');
module.exports = {
    publicPath: '/',
    devServer: {
        port: 8080,
        headers: {          //  允许跨域访问子应用页面
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
          library: `${name}-[name]`,
          libraryTarget: 'umd', // 把微应用打包成 umd 库格式
          jsonpFunction: `webpackJsonp_${name}`,
        },
      },
};
