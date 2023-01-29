
// import Test from '../components/Test'
//从react-redux中引入connect方法
import {connect} from 'react-redux'
//引入action_creator
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../redux/actions/count'

import React, { Component } from "react";
//定义UI组件
class Count extends Component {
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
        <h1>Count component</h1>
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



//创建好为Count服务的容器组件，并且为Count组件传递了：(1).状态 (2).操作状态的方法。
export default connect(
	state => ({number:state}),
    /* state=>{
        // state本身是一个对象 {count: val} 直接返回state即可
        // console.log("count-container:", state)
        return state
    }, */
	//复杂的写法，如下：
	/* dispatch => (
		{
			jia:(value)=>{dispatch(createIncrementAction(value))},
			jian:(value)=>{dispatch(createDecrementAction(value))}
		}
	) */
	//精简的写法，如下：备注:connect底层会将精简版所写的对象，加工成复杂写法
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		asyncCre:createIncrementAsyncAction,
	}
)(Count)

