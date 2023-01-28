import React, { Component } from "react";

const DetailData = [
  { id: "01", title: "message 01", content: "message 01...." },
  { id: "02", title: "message 02", content: "message 02...." },
  { id: "03", title: "message 03", content: "message 03...." },
];

export default class Detail extends Component {
  render() {
    // console.log("detail:", this.props);
    // 接收state参数
    const { id, title } = this.props.location.state || {};
    const findResult = DetailData.find((item) => {
      return item.id === id;
    }) || {};
    return (
      <div>
        <ul>
          <li>id: {id}</li>
          <li>title: {title}</li>
          <li>content: {findResult.content}</li>
        </ul>
      </div>
    );
  }
}
