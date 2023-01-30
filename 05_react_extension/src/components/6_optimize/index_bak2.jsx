import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
  state = { carName: "BENCHI" };
  handleChangCar = () => {
    this.setState({carName:"Mazda"})
    // this.setState({});
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.carName !== nextState.carName || this.props !== nextProps) return true;
    return false;
  }
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
class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("child:", this.state, this.props)
    console.log("child-next:", nextProps, nextState)
    if (this.state !== nextState || this.props.carName !== nextProps.carName) return true;
    return false;
  }
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
