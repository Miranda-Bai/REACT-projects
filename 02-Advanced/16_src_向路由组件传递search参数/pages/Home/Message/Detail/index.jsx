import React, { Component } from "react";
// node自带
// import  qs from "querystring"
// 新写法
import  qs from "qs"

const DetailData = [
  { id: "01", title: "message 01", content: "message 01...." },
  { id: "02", title: "message 02", content: "message 02...." },
  { id: "03", title: "message 03", content: "message 03...." },
];

export default class Detail extends Component {
  render() {
    // console.log("detail:", this.props);
    // 接收search参数 this.props.location.search="?id=01&title=message 01" 通过parse方法变为对象， 
    // stringify()变为"id=01&title=message 01"
    const { id, title } = qs.parse(this.props.location.search.slice(1));
    const findResult = DetailData.find((item) => {
      return item.id === id;
    });
    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {findResult.content}</li>
      </ul>
    );
  }
}
