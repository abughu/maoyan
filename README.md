# 猫眼电影信息管理系统前后端项目

采取的开发结构是前后端分离开发

### 前端架构

主体结构：RMVC ； SPA + MPA （index + admin）

View: 视图编译采用template-web.js

Router: SME-Router

环境搭建：

采用Webpack 4.0开发

UI框架：AdminLTE

JS编译处理：

webpack 4 + babel 7

[babel项目](https://github.com/babel/babel-loader)
cnpm i babel-loader @babel/core @babel/runtime @babel/plugin-transform-runtime @babel/preset-env -D

{
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
}

SCSS编译处理

利用sass-loader来编译scss代码为css代码（node-sass）
利用css-loader找到引入在js中css代码
利用style-loader将其拿走放入到style标签中（head）