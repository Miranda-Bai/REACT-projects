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
  replaceShow = (id, title) => {
    //编写一段代码，让其实现跳转到Detail组件，且为replace跳转
    // replace跳转,携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);
    // replace跳转,携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);
    // replace跳转,携带state参数
    this.props.history.replace("/home/message/detail",{id,title});
  };
  pushShow = (id,title)=>{
    return ()=>{
      //编写一段代码，让其实现跳转到Detail组件，且为push跳转
      // push跳转,携带params参数
      // this.props.history.push(`/home/message/detail/${id}/${title}`);
      // push跳转,携带search参数
      // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);
      // push跳转,携带state参数
      this.props.history.push("/home/message/detail",{id,title});
    }
  }
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((item) => {
            return (
              <li key={item.id}>
               {/*  <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link> */}
              {/*   <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>
                  {item.title}
                </Link> */}
                {/* 向路由组件传递state参数 */}
                <Link to={{pathname:"/home/message/detail", state:{id:item.id,title:item.title}}}>{item.title}</Link>
                &nbsp;<button onClick={this.pushShow(item.id,item.title)}>push查看</button>
                &nbsp;
                <button onClick={() => this.replaceShow(item.id, item.title)}>
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <Route
          path="/home/message/detail"
          component={Detail}
        ></Route>
      </div>
    );
  }
}
