import React, { Component } from "react";
// import axios from "axios";
import PubSub from "pubsub-js";
import "./index.css";

export default class Search extends Component {
  handleSearchUsers = async () => {
    //获取用户输入
    // 连续结构赋值 keywordRef 不可用
    const {
      keywordRef: { value },
    } = this;

    // 发布updateSearchState 的消息
    PubSub.publish("updateSearchState", {
      isFirst: false,
      isLoading: true,
      error: "",
    });
    // 发送网络请求
    /* fetch(`https://api.github.com/search/users?q=${value}`)
      .then((response) => {
        // 只要连接到了服务器就会执行这个，即使返回是404
        console.log("connect server succeed!");
        // 不能读取json()两次
        return response.json();
      })
      .then((response) => {
        console.log("@", response);
        if (response.items) {
          // 发布updateSearchState 的消息
          PubSub.publish("updateSearchState", {
            userLst: response.items,
            isLoading: false,
          });
        } else {
          console.log("error:", response.message);
          // 发布updateSearchState 的消息
          PubSub.publish("updateSearchState", {
            error: response.message,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log("error:", error);
        // 最后统一处理错误
        // 发布updateSearchState 的消息
        PubSub.publish("updateSearchState", {
          error: error.message,
          isLoading: false,
        });
      }); */
    //第二种写法(优化)
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${value}`
      );
      const data = await response.json();
      console.log(data);
      if (data.items) {
        // 发布updateSearchState 的消息
        PubSub.publish("updateSearchState", {
          userLst: data.items,
          isLoading: false,
        });
      } else {
        console.log("error:", data.message);
        // 发布updateSearchState 的消息
        PubSub.publish("updateSearchState", {
          error: data.message,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log("error:", error);
        // 最后统一处理错误
        // 发布updateSearchState 的消息
        PubSub.publish("updateSearchState", {
          error: error.message,
          isLoading: false,
        });
    }
  };
  handleOnKeyUp = (event) => {
    // console.log(event.keyCode)
    // 当用户输入回车键时，触发搜索按钮事件
    if (event.keyCode === 13) {
      this.handleSearchUsers();
    }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="Please enter name to start searching"
            ref={(c) => (this.keywordRef = c)}
            onKeyUp={this.handleOnKeyUp}
          />
          &nbsp;
          <button onClick={this.handleSearchUsers} className="search-button">
            Search
          </button>
        </div>
      </section>
    );
  }
}
