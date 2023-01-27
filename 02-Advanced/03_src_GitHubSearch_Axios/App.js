import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  // isFirst是否为第一次打开页面 isLoading 是否处于加载中 error 存储请求相关的错误信息
  state = { userLst: [], isFirst: true, isLoading: false, error: "" };
  /* getUserData = (dataArr) => {
    this.setState({ userLst: dataArr });
  }; */
  updateAppState=(stateObj)=>{
    this.setState(stateObj);
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state}></List>
      </div>
    );
  }
}
