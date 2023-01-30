import React, { PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  state = { carName: "BENCHI" };
  handleChangCar = () => {
    // this.setState({carName:"Mazda"})
    // 修改state时，要产生新对象，替换旧对象，不要直接在之前的state上操作，容易发生浅拷贝的问题
    this.setState({});
  };
  
  render() {
    console.log("parent render");
    return (
      <div className="parent">
        <h3>Parent component</h3>
        <h3>car is {this.state.carName}</h3>
        <button onClick={this.handleChangCar}> change car </button>
        {/* <Child carName={this.state.carName} /> */}
        <Child carName="Toyota" />
        {/* <Child /> */}
      </div>
    );
  }
}
class Child extends PureComponent {
  
  render() {
    console.log("child render");
    return (
      <div className="child">
        <h3>Child component</h3>
        <h3>car is {this.props.carName}</h3>
      </div>
    );
  }
}
