import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
        </Switch>
      </div>
    );
  }
}
