import React, { Component } from "react";
import Child from "./Child";

/*
错误边界只适用于生成环境，开发环境最后依然会保错
错误边界应该找出错误的那个组件的父组件来处理
*/
export default class Parent extends Component {
  state = {
    hasError: "", //用于标识子组件是否产生错误
  };
  //当Parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并携带错误信息
  //getDerivedStateFromError只能捕获后代组件生命周期产生的错误
  static getDerivedStateFromError(error) {
    console.log("@@@",error);
    return { hasError: error };
  }
  // 组件渲染过程中，出错时调用,一般用于统计错误次数，反馈给服务器，通知编码人员进行bug解决
  componentDidCatch(){
    console.log("rendering component error!")
  }
  render() {
    return (
      <div>
        <h2>Parent</h2>
        {this.state.hasError ? (
          <h2>current network is unstable, please try later.</h2>
        ) : (
          <Child />
        )}
      </div>
    );
  }
}
