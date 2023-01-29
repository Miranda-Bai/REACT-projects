import React, { Component } from "react";
import store from "../../redux/store";
import {increment,decrement,incrementIfOdd,incrementAsync} from "../../redux/count_reducer"

export default class Count extends Component {
  // state = { sum: 0 };
  /* componentDidMount(){
    // 检测redux中state的变化，只要变化，就调用render
    store.subscribe(()=>{
      // this.render()无法之间调用render
      this.setState({});
    })
  } */

  increment = () => {
    const { value } = this.selectedNumber;
     /*const { sum } = this.state;
    // +value 强制类型转换，或者 sum+value*1也可以把value强制类型转换
    this.setState({ sum: +value + sum }); */
    store.dispatch(increment(value*1))
    // console.log("count: ")
    
  };
  decrement = () => {
    const { value } = this.selectedNumber;
    /* const { sum } = this.state;
    // +value 强制类型转换，或者 sum+value*1也可以把value强制类型转换
    this.setState({ sum: sum - value * 1 }); */
    store.dispatch(decrement(value*1))
  };
  incrementIfOdd = () => {
    const { value } = this.selectedNumber;
    // const { sum } = this.state;
    // const {sum } =  store.getState().count
    /* if (sum % 2 !== 0) {
      // this.setState({ sum: sum + value * 1 });
    } */
    store.dispatch(incrementIfOdd(value*1))
  };
  incrementAsync = () => {
    const { value } = this.selectedNumber;
    // const { sum } = this.state;
    /* setTimeout(() => {
      // this.setState({ sum: sum + value * 1 });
      
    }, 1000); */
    store.dispatch(incrementAsync(value*1))
  };
  render() {
  //  console.log("store: ", store.getState().count.sum)
    return (
      <div>
        <h1>current sum is : {store.getState().count.sum}</h1>
        <select ref={(c) => (this.selectedNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        &nbsp;
        <button onClick={this.increment}> + </button>&nbsp;
        <button onClick={this.decrement}> - </button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
