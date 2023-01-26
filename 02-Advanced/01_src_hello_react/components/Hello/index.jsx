import React, { Component } from "react";
import Hello from "./index.module.css"

export default class App extends Component {
  render() {
    return <h3 className={Hello.title}>Hello React!!</h3>;
  }
}
