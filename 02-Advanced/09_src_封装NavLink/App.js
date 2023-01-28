import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./style.css";
// 路由组件放到pages
import Home from "./pages/Home";
import About from "./pages/About";
// 普通组件放到components
import Header from "./components/Header"
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
              <MyNavLink to="/about" a={1} b={2} c={3} >About</MyNavLink>
              <MyNavLink to="/home" >Home</MyNavLink>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-body">
                {/* <!-- 指定组件的呈现位置 --> */}
                {/* 注册路由 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
