# 安装React脚手架
1.全局安装 npm install -g create-react-app //不需要
2.创建项目 npx create-react-app <project-directory> //直接使用npx create-react-app创建项目即可
3.进入项目文件夹 cd <project-directory>
4.启动项目 npm start
5. ctrl+c stop running

清除缓存 npm cache clean -f 

不说就是引入文件夹下的index.js文件
自动生成react组件模版rcc代码片段rfc生成函数形式的组件
# react ajax axios配置代理
React本身只关注与页面，并不包含发送ajax请求的代码，所以一般都是集成第三方的一些库，或者自己进行封装。

推荐使用axios。

在使用的过程中很有可能会出现跨域的问题，这样就应该配置代理。

所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）， 当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域 。

那么react通过代理解决跨域问题呢
#### 方法一

在package.json中追加如下配置

`"proxy":"请求的地址"      "proxy":"http://localhost:5000" ` 
说明：

优点：配置简单，前端请求资源时可以不加任何前缀。
缺点：不能配置多个代理。
工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）
#### 方法二

第一步：创建代理配置文件

在src下创建配置文件：src/setupProxy.js
编写setupProxy.js配置具体代理规则：
https://github.com/chimurai/http-proxy-middleware

```const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    proxy('/api2', { 
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    })
  )
}
```
说明：

优点：可以配置多个代理，可以灵活的控制请求是否走代理。
缺点：配置繁琐，前端请求资源时必须加前缀。
# 组件之间共享数据
npm install pubsub-js
https://github.com/mroderick/PubSubJS
# Fetch
文档地址：https://github.github.io/fetch/
中文地址：https://segmentfault.com/a/1190000003810652
Fetch和Axios一样是对XmlHttpRequest的封装
# 改造React为多页面应用
因脚手架将配置隐藏了，改造时，需使用npm run eject命令释放出配置。
> 注意，这是一个单项操作，执行后所有的配置就不能再收回去了。

`$ npm run eject`
项目工程文件夹内会多出一个config文件夹
