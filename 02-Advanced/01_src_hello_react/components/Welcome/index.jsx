import React, { Component } from "react";
import Welcome from "./index.module.css"

export default class App extends Component {
  render() {
    return <h3 className={Welcome.title}>welcome</h3>;
  }
}
