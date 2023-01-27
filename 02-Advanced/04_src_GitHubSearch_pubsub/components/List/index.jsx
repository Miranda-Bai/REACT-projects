import React, { Component } from "react";
import "./index.css";
import PubSub from "pubsub-js";

export default class List extends Component {
  // isFirst是否为第一次打开页面 isLoading 是否处于加载中 error 存储请求相关的错误信息
  state = { userLst: [], isFirst: true, isLoading: false, error: "" };
  componentDidMount() {
    // 订阅 updateSearchState 的消息
    // 第一个参数不用可以用下划线代替
    this.token = PubSub.subscribe("updateSearchState", (_, data) => {
      // console.log("list receive data from search:",data)
      this.setState(data);
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { userLst, isFirst, isLoading, error } = this.state;
    return (
      <div className="row">
        {/* <!-- 展示用户列表 jsx只能写表达式不能写ifelse等语句 所以，连写三元表达式--> */}
        {isFirst ? (
          <h2>Welcome to use GitHub search!!!!</h2>
        ) : isLoading ? (
          <h2>Loading.....</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : userLst.length === 0 ? (
          <h2>
            Sorry, nothing in here....
            <br />
            please try another keyword
          </h2>
        ) : (
          userLst.map((item) => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={item.avatar_url}
                    style={{ width: "100px" }}
                    alt="avatar"
                  />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
