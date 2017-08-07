# webpack-demo
webpack-demo
##### 1,安装 Webpack

```
cd webpack-demo
npm install webpack -g
mkdir src
```

##### 2,loader
- webpack本身只能处理Javascript模块,如果要处理其他类型的模块,就需要使用loader进行转换
- 如果我们需要在应用中添加css模块,就需要使用css-loader和style-loader
- css-loader会遍历css文件,然后找到url()表达式然后处理他们
- style-loader会把原来的css代码插入页面的一个style标签中

```
npm install css-loader style-loader

src/style.css 文件
body {
    background: yellow;
}
runoob1.js 
require("!style-loader!css-loader!./style.css");
document.write(require("./runoob2.js"));

使用webpack命令来打包
webpack runoob1.js bundle.js

require CSS 文件的时候都要写 loader 前缀 !style-loader!css-loader!，当然我们可以根据模块类型（扩展名）来自动绑定需要的 loader。 将 runoob1.js 中的 require("!style-loader!css-loader!./style.css") 修改为 

require("./style.css");
document.write(require("./runoob2.js"));

然后执行 webpack runoob1.js bundle.js --module-bind'css=style-loader!css-loader'
```
##### 3,plugins插件
插件在webpack的配置信息plugins选项中指定,用于完成一些loader不能完成的工.
webpack自带一些插件,可以使用npm安装一些插件
```
npm install webpack --save-dev
```
##### 4,开发环境
- 当项目逐渐变大，webpack 的编译时间会变长，可以通过参数让编译的输出内容带有进度和颜色。
```
webpack --progress --colors
```
- 如果不想每次修改模块后都重新编译，那么可以启动监听模式。开启监听模式后，没有变化的模块会在编译后缓存到内存中，而不会每次都被重新编译，所以监听模式的整体速度是很快的。
```
webpack --progress --colors --watch
```
- 我们可以使用webpack-dev-server 开发服务,这样我们就能通过localhost:8080启动一个express静态资源web服务器,并且会以监听模式自动运行webpack,在浏览器打开 http://localhost:8080/ 或 http://localhost:8080/webpack-dev-server/ 可以浏览项目中的页面和编译后的资源输出，并且通过一个 socket.io 服务实时监听它们的变化并自动刷新页面。
```
# 安装
npm install webpack-dev-server -g
# 运行
webpack-dev-server --process --colors
```