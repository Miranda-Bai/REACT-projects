import React, { Component } from "react";
import { connect } from "react-redux";
import { createIncrementAction } from "../redux/actions/count";

class Count extends Component {
  add = () => {
    //通知redux加1
    this.props.increment(1);
  };
  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>current sum is {this.props.count}</h2>
        <button onClick={this.add}>+</button>&nbsp;
      </div>
    );
  }
}

export default connect(
  (state) => state, //映射状态
  { increment: createIncrementAction } //映射操作状态的方法
)(Count);
