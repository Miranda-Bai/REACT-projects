import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    // const {to} = this.props
    // console.log("my navlink:",this.props)
    return (
      <NavLink
        className="list-group-item"
        activeClassName="my-active"
        {...this.props}
      />
    );
  }
}
