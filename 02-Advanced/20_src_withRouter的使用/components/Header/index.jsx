import React, { Component } from "react";
import { withRouter } from "react-router-dom";

 class Header extends Component {
  handleGoBack=()=>{
    this.props.history.goBack();
  }
  handleGoForward=()=>{
    this.props.history.goForward();
  }
  render() {
    // console.log("header received props are ", this.props)
    return (
      <div className="offset-md-2 col-md-8">
        <div className="page-header">
          <h2>React Router Demo</h2>
        </div>
        <button onClick={this.handleGoBack}>go back</button>
        &nbsp;<button onClick={this.handleGoForward}>forward</button>
      </div>
    );
  }
}
// withRouter给一般组件加上路由组件的API
// withRouter的返回值是一个新组件
export default withRouter(Header)