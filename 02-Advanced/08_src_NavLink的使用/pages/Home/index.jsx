import React, { Component } from "react";

export default class Home extends Component {
  
  render() {
    console.log("home receiveds props are ", this.props)
    return (
      <div className="home-container">
        <h3>Home 组件</h3>
      </div>
    );
  }
}
