import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

export default class App extends Component {
  //状态在哪里，操作状态的方法就在哪里
  state = {
    todoLst: [
      {
        id: "001",
        content: "go to have lunch",
        category: "personal",
        done: true,
      },
      {
        id: "002",
        content: "go to library",
        category: "business",
        done: false,
      },
      {
        id: "003",
        content: "buy some groceries",
        category: "personal",
        done: false,
      },
      {
        id: "004",
        content: "go to shopping",
        category: "personal",
        done: true,
      },
    ],
  };
  // 添加
  addToDoItem = (itemObj) => {
    console.log("addToDoItem in App:", itemObj);
    const { todoLst } = this.state;
    const newTodoLst = [itemObj, ...todoLst];
    //更新状态后，页面才会更新
    this.setState({ todoLst: newTodoLst });
  };
  //更新指定id的todo对象
  updateToDoItem = (id, done) => {
    const { todoLst } = this.state;
    const newTodoLst = todoLst.map((item) => {
      if (item.id === id) return { ...item, done };
      else return item;
    });
    this.setState({ todoLst: newTodoLst });
  };
  //删除一个todoItem
  deleteToDoItem = (id) => {
    const { todoLst } = this.state;
    const newTodoLst = todoLst.filter((item) => {
      /* if(item.id === id) return false
      return true; */
      return item.id !== id;
    });
    this.setState({ todoLst: newTodoLst });
  };
  // 全选所有要做事项，所有的done都为true或false
  checkAllToDoItem = (done) => {
    const { todoLst } = this.state;
    const newTodoLst = todoLst.map((item) => {
      return { ...item, done };
    });
    this.setState({ todoLst: newTodoLst });
  };
  deleteAllDoneToDoItem = () => {
    const { todoLst } = this.state;
    //返回所有done为false的事项
    const newTodoLst = todoLst.filter((item) => {
      return !item.done;
    });
    this.setState({ todoLst: newTodoLst });
  };
  render() {
    const { todoLst } = this.state;
    return (
      <div>
        <Header addToDoItem={this.addToDoItem} />
        <List
          todoLst={todoLst}
          updateToDoItem={this.updateToDoItem}
          deleteToDoItem={this.deleteToDoItem}
        />
        <Footer
          todoLst={todoLst}
          checkAllToDoItem={this.checkAllToDoItem}
          deleteAllDoneToDoItem={this.deleteAllDoneToDoItem}
        />
      </div>
    );
  }
}
