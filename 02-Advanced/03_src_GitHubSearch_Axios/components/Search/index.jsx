import React, { Component } from "react";
import axios from "axios";
import "./index.css";

export default class Search extends Component {
    
  handleSearchUsers = () => {
    //获取用户输入
    // 连续结构赋值 keywordRef 不可用
    const { keywordRef:{value} } = this;
    console.log(value);
    // 发送请求前通知App更新状态
    this.props.updateAppState({isFirst:false, isLoading:true, error:""})
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then((response)=>{
        console.log("response:", response.data.items)
        //通知app组件设置user data
        this.props.updateAppState({userLst:response.data.items, isLoading:false})
    },(error)=>{
        console.log("error!!",error)
        // 请求失败后通知App更新状态
        this.props.updateAppState({error:error.message,isLoading:false})
    });
  };
  handleOnKeyUp = (event) => {
    // console.log(event.keyCode)
    // 当用户输入回车键时，触发搜索按钮事件
    if (event.keyCode === 13) {
      this.handleSearchUsers();
    }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="Please enter name to start searching"
            ref={(c) => (this.keywordRef = c)}
            onKeyUp={this.handleOnKeyUp}
          />
          &nbsp;
          <button onClick={this.handleSearchUsers} className="search-button">
            Search
          </button>
        </div>
      </section>
    );
  }
}
