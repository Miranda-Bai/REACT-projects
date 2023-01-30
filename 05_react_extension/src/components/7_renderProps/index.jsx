import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>Parent</h3>
        <A render={(val) => <C val={val} />} />
      </div>
    );
  }
}

class A extends Component {
  state = { name: "Tom" };
  render() {
    // console.log(this.props);
    return (
      <div className="a">
        <h3>A</h3>
        {this.props.render(this.state.name)}
      </div>
    );
  }
}
class B extends Component {
  render() {
    console.log("B render");
    console.log(this.props);
    return (
      <div className="b">
        <h3>B</h3>
        {this.props.val}
      </div>
    );
  }
}
class C extends Component {
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
  