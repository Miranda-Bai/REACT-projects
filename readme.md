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
# React路由
npm install react-router-dom@5 //安装5版本
## 路由组件与一般组件
一般组件：写组件标签时传递了什么，就能收到什么
`<Header />`
路由组件：接收到三个固定属性
`<Route path="/about" component={About} />`
   
    history: 
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
    location: 
        pathname: "/home"
        search: ""
        state: undefined
    match: 
        params: {}
        path: "/home"
        url: "/home"

## 嵌套路由
1.注册子路由的时候要写上父路由的path值
2.路由的匹配是按照注册路由的顺序进行的
路由匹配是从第一次注册路由开始匹配，如果开启严格模式，会导致无法匹配二级路由。

给<Link/>加上replace，表示浏览器使用replace模式，可以实现无痕浏览
默认是push模式，会有history，可以前进或后退
```<Link replace to={{pathname:"/home/message/detail", state:{id:item.id,title:item.title}}}>{item.title}</Link>
```
## BrowserRouter与HanshRouter的区别
1. 底层原理不一样：
        BrowserRouter使用的是H5的history API，不兼容IE9及以下版本
        HashRouter使用的是URL的哈希值
2. path表现形式不一样
        BrowserRouter路径中没有#
        HashRouter路径中包含#
3. 刷新后对路由state参数的影响
        BrowserRouter没有任何影响，因为state保持在history对象中
        HashRouter刷新后会导致路由state参数的丢失
4. 备注：HashRouter可以用于解决一些路径错误相关问题。
# React UI组件库
material-ui（国外）
https://mui.com/
ant-design（国内蚂蚁金服）
https://ant.design/index-cn
`npm install antd`
antd5h后不需要单独引入样式
# Redux
https://redux.js.org/
https://www.redux.org.cn/
Redux是一个专门用于做状态管理的JS库（不是React插件库）
作用：集中管理react应用中多个组件共享的状态
 `npm install @reduxjs/toolkit`
 Redux只管理共享数据，不更新页面
# 纯函数
1. 一类特别的函数：只要是同样的输入（实参），必定得到同样的输出（返回）
2. 必须遵守以下一些约束
        不得改写参数数据
        不会产生任何副作用，例如网络请求，输入和输出设备
        不能调用Date.now或者Math.random等不纯的方法
3. redux的reducer函数必须是纯函数
# 打包项目
npm run build
全局安装serve库
npm i serve -g

需要你用 root权限进行安装才行
sudo npm i serve -g
然后输入密码 才行

serve build 运行打包后的项目，相当于把自己的电脑作为服务器