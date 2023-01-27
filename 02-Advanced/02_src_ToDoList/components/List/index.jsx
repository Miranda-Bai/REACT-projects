import React, { Component } from "react";
import PropTypes from "prop-types";
import LItem from "../LItem";

export default class List extends Component {
  static propTypes = {
    todoLst:PropTypes.array.isRequired,
    updateToDoItem: PropTypes.func.isRequired,
    deleteToDoItem: PropTypes.func.isRequired,
  };
  render() {
    const { todoLst, updateToDoItem,deleteToDoItem } = this.props;
    return (
      <section className="todo-list">
        <h3>TODO LIST</h3>
        <div className="list" id="todo-list">
          <div>
            {todoLst.map((item) => {
              return (
                <LItem
                  key={item.id}
                  {...item}
                  updateToDoItem={updateToDoItem}
                  deleteToDoItem={deleteToDoItem}
                ></LItem>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
