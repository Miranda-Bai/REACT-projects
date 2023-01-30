import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };
  increment = () => {
    // const { count } = this.state;
    // setState所引起的后续状态更新是异步的
    // this.setState({ count: count + 1 });
    //对象式的setState, 第二个回调函数是在状态更新完，render调用完之后调用
    /* this.setState({ count: count + 1 },()=>{
      console.log("1:",this.state.count)
    })
    console.log("2:",this.state.count) */
    //函数式的setState
    this.setState((state, props)=>{
      return {count:state.count+1}
    });
  };
  render() {
    return (
      <div>
        <h1>current sum is {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}
