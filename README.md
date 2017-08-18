# 从0开始配置webpack,[参考](http://www.jianshu.com/p/42e11515c10f)
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
- css-loader会遍历css文件,然后找到@import()和url()的方法实现require()的功能
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

##### 1,从0开始配置webpack,使用react项目作为测试用例
- 使用path和不适用path的路径配置有什么不同?
- 使用npm scripts代替webpack(非全局安装需使用node_modules/.bin/webpack)? 
- 
##### 2,生成source Maps
- source Maps 解决了什么问题? 使调试更容易

##### 3, 构建本地服务器
```bash
npm install --save-dev webpack-dev-server
```
##### 4,loader
作用
- 分析转化less和scss为css
- es6, es7或typescript转化为浏览器支持的javascript
- react中将jsx转化为js
参数
- test: 一个用于loaders处理的文件的拓展名的正则表达式(必须)
- loader: loader的名称(必须)
- include/exclude: 手动添加必须要处理的文件夹(文件夹)或屏蔽不需要处理的文件  (可选)
- query: 为loaders提供额外的设置选项 (选项)
#### 5,babel
- Babel的安装与配置
```
// npm一次性安装多个依赖模块，模块之间用空格隔开
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```
现在webpack的配置已经允许使用es6以及jsx的语法了

不过这次测试用例会用到react,所以需要安装 React 和 React-DOM

```
npm install --save react react-dom
```

- Babel的配置
babel配置可以在webpack.config.js中配置，但是babel有很多配置项，因此把他单独放在'.babelrc'的配置文件中   

#### 6，css及css模块化

#### 7，css预处理器
常用到的css处理loaders:
- less loader
- sass loader
- stylus loader

```
npm install --save-dev postcss-loader autoprefixer
```

#### 8, 插件(plugins)
- loaders用来处理打包过程中源文件的(jsx, less, scss..)
- plugins在整个构建过程中生效
使用某插件的方法，需要通过npm来安装，然后在webpack配置中的关键字plugins(是一个数组),后加上该插件的实例
> HtmlWebapckPlugin
- 依据一个简单的index.html模板，生成一个自动引用你打包后的js文件的新的index.html,这在每次生成的js文件名称不同时非常有用(比如添加了hash值)
```
npm install --save-dev html-webpack-plugin
```
> Hot Module Replacement
- 允许你在修改组件代码后，自动刷新实现实时预览修改后的效果
