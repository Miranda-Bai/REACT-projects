import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    // console.log("home receiveds props are ", this.props)
    return (
      <div className="home-container">
        <h3>Home 组件</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Message}></Route>
          {/* 所有匹配不到的home二级路由直接跳到这 */}
          <Redirect to="/home/news" ></Redirect>
        </Switch>
      </div>
    );
  }
}
