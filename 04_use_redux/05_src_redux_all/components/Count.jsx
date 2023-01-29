//该组件是UI组件，不可以使用任何的redux中的API
import React, { Component } from "react";

export default class Count extends Component {
  //加法
  increment = () => {
    // console.log(this.props);
    //1.获取用户输入
    let { value } = this.selectedNumber;
    this.props.jia(value * 1);
  };

  //减法
  decrement = () => {
    //1.获取用户输入
    let { value } = this.selectedNumber;
    this.props.jian(value * 1);
  };

  //当前为奇数再加
  incrementIfOdd = () => {
    //1.获取用户输入
    let { value } = this.selectedNumber;
    //2.从redux中获取count值
    let { count } = this.props.number;
    //3.判断是否为奇数
    if (count % 2 === 1) {
      this.props.jia(value * 1);
    }
  };

  //延迟500毫秒加
  incrementAsync = () => {
    //1.获取用户输入
    let { value } = this.selectedNumber;
    this.props.asyncCre(value*1,2000)
  };

  render() {
    return (
      <div>
        {/* <h2>当前求和为：</h2> */}
        <h2>当前求和为：{this.props.number.count}</h2>
        <select ref={(c) => (this.selectedNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}
