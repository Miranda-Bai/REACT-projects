import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./style.css";
// 路由组件放到pages
import Home from "./pages/Home";
import About from "./pages/About";
// 普通组件放到components
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <hr />
        <div className="row">
          <div className="offset-md-2 col-md-2">
            <div className="list-group">
              {/* <a class="list-group-item active" href="/about">About</a>
            <a class="list-group-item" href="/home">Home</a> */}
              {/* 编写路由链接 activeClassName指定点谁添加样式，如果样式名为active可不写 */}
              <MyNavLink to="/about">About</MyNavLink>
              {/* 模糊匹配 */}
              <MyNavLink to="/home/a/b">Home</MyNavLink>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-body">
                {/* <!-- 指定组件的呈现位置 --> */}
                {/* switch保证一个路径只匹配一个路径，不会继续往下匹配, 即单一匹配 */}
                <Switch>
                  {/* 注册路由 */}
                  {/* 默认模糊匹配，exact开启严格匹配 严格匹配不要随便开启，有些时候开启会导致无法继续匹配二级路由*/}
                  <Route exact={true} path="/about" component={About} />
                  <Route exact path="/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
