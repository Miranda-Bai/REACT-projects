// {按需导入}
import React, {Component} from "react";
import Hello from "./components/Hello"
import Welcome from "./components/Welcome"

//一定要export，不然其他文件访问不了它
export default class App extends Component {
  render() {
    return (
        <div>
            <Hello />
            <Welcome />
        </div>
    );
  }
}
