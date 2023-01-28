import React, { Component } from "react";
import { Route, Switch,Redirect } from "react-router-dom";
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
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-body">
                {/* <!-- 指定组件的呈现位置 --> */}
                {/* switch保证一个路径只匹配一个路径，不会继续往下匹配, 即单一匹配 */}
                <Switch>
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* 所有匹配不到的一级路由直接跳到这 */}
                  <Redirect to="/about"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
