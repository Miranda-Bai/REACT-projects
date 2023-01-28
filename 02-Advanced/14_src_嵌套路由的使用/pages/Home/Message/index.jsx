import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/message1">message01</a>
          </li>
          <li>
            <a href="/message2">message02</a>
          </li>
          <li>
            <a href="/message3">message03</a>
          </li>
        </ul>
      </div>
    );
  }
}
