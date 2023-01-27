import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LItem extends Component {
  static propTypes = {
    updateToDoItem: PropTypes.func.isRequired,
    deleteToDoItem: PropTypes.func.isRequired,
  };
  //勾选或取消勾选
  handleChangeDone = (id) => {
    return (event) => {
      // console.log("handleChangeDone:", id, event.target.checked);
      // 通知app组件更新
      this.props.updateToDoItem(id, event.target.checked);
    };
  };
  //删除一个todoItem
  handleDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      //通知App删除
      this.props.deleteToDoItem(id);
    }
  };
  render() {
    const { id, done, category, content } = this.props;
    return (
      <div className={`todo-item ${done && "done"}`}>
        <label>
          {/* defaultChecked 只在第一次起作用 */}
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleChangeDone(id)}
          />
          <span
            className={
              category === "business" ? "bubble business" : "bubble personal"
            }
          ></span>
        </label>

        <div className="todo-content">
          <input type="text" value={content} readOnly></input>
        </div>

        <div className="actions">
          <button
            className="delete"
            onClick={() => {
              this.handleDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
