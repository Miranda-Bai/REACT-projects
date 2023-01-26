import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

export default class Header extends Component {
  static propTypes = {
    addToDoItem: PropTypes.func.isRequired,
  };

  state = { content: "", category: "personal", warning: "" };
  addToDoItem = (event) => {
    event.preventDefault();

    const { content, category } = this.state;
    console.log("addToDoItem:", content, category);
    if (content.trim() === "") {
      this.setState({ warning: "warning" });
    } else {
      // 将值传给父组件
      this.props.addToDoItem({ id: nanoid(), content, category, done: false });
    }

    // this.setState({content:""})
    // this.setState({category: "personal" })
  };
  handleChangeData = (type, event) => {
    // console.log("handleChangeDate:",type, event.target.value)
    if (type === "content") {
      if (event.target.value.trim() === "") {
        this.setState({ warning: "warning" });
      } else {
        this.setState({ content: event.target.value });
      }
    }

    if (type === "category") this.setState({ category: event.target.value });
  };
  render() {
    // console.log("render",this.state.category)
    return (
      <div>
        <section className="greeting">
          <h2 className="title">
            What's up,{" "}
            <input
              type="text"
              id="name"
              placeholder="Name here"
              value="Miranda"
              readOnly
            />
          </h2>
        </section>
        <section className="create-todo">
          <h3>CREATE A TODO</h3>

          <form id="new-todo-form" onSubmit={this.addToDoItem}>
            <h4>What's on your todo list?</h4>
            <input
              type="text"
              name="content"
              id="content"
              placeholder="e.g. make a video"
              onBlur={(event) => this.handleChangeData("content", event)}
              className={this.state.warning}
            />

            <h4>Pick a category</h4>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="category"
                  id="category1"
                  value="business"
                  checked={this.state.category === "business" ? true : false}
                  onChange={(event) => this.handleChangeData("category", event)}
                />
                <span className="bubble business"></span>
                <div>Business</div>
              </label>

              <label>
                <input
                  type="radio"
                  name="category"
                  id="category2"
                  value="personal"
                  checked={this.state.category === "personal" ? true : false}
                  onChange={(event) => this.handleChangeData("category", event)}
                />
                <span className="bubble personal"></span>
                <div>Personal</div>
              </label>
            </div>

            <input type="submit" value="Add todo" />
          </form>
        </section>
      </div>
    );
  }
}
