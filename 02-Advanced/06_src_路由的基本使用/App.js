import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";
import Home from "./components/Home";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="offset-md-2 col-md-2">
            <div className="list-group">
              {/* <a class="list-group-item active" href="/about">About</a>
            <a class="list-group-item" href="/home">Home</a> */}
              {/* 编写路由链接 */}

              <Link className="list-group-item " to="/about">
                About
              </Link>
              <Link className="list-group-item active" to="/home">
                Home
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-body">
                {/* <!-- 指定组件的呈现位置 --> */}
                {/* 注册路由 */}
                {/* <router-view></router-view> */}

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
