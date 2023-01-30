import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
import Loading from "./Loading";
import "./style.css";
// import Home from "./Home";
// import About from "./About";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default class Demo extends Component {
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

              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel-body">
                {/* <!-- 指定组件的呈现位置 --> */}
                {/* 注册路由 */}
                {/* <Suspense fallback={<h1>loading.....</h1>}> */}
                <Suspense fallback={<Loading/>} >
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
