import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "message 01" },
      { id: "02", title: "message 02" },
      { id: "03", title: "message 03" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((item) => {
            return (
              <li key={item.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
          {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
      </div>
    );
  }
}
