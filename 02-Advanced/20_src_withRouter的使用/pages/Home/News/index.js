import React, { Component } from "react";

export default class News extends Component {
  /* componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.history.push("/home/message");
    }, 2000);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  } */
  render() {
    return (
      <div>
        <ul>
          <li>news01</li>
          <li>news02</li>
          <li>news03</li>
        </ul>
      </div>
    );
  }
}
