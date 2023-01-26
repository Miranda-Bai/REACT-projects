import React, { Component } from "react";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    // console.log("handleCheckAll:",event.target.checked)
    // 通知app组件 全选所有要做事项，所有的done都为true或false
    this.props.checkAllToDoItem(event.target.checked);
  };
  // 清除所有已完成事项
  deleteAllDone = () => {
    // 通知app组件 清除所有已完成事项
    this.props.deleteAllDoneToDoItem();
  };
  render() {
    const { todoLst } = this.props;
    const total = todoLst.length;
    // 已完成 pre上一次函数调用的返回值，第一次调用为0，item是当前数组中的值
    const doneCount = todoLst.reduce((pre, item) => {
      if (item.done) return pre + 1;
      return pre;
    }, 0);
    return (
      <section className="tdl-footer">
        <div className="footer-content">
          <label>
            {/* defaultChecked 只在第一次起作用 */}
            <input
              type="checkbox"
              checked={doneCount === total && total !== 0 ? true : false}
              onChange={this.handleCheckAll}
            />
            <span className="bubble"></span>
          </label>
          <div className="sum">
            {doneCount} / {total}
          </div>
          <div className="actions">
            <button className="delete" onClick={this.deleteAllDone}>
              Delete All Done
            </button>
          </div>
        </div>
      </section>
    );
  }
}
