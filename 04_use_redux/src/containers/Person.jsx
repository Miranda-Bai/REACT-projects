import React, { Component } from "react";
import { nanoid } from "@reduxjs/toolkit";

export default class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    // console.log(name, age);
    const personObj = {id:nanoid(), name, age}
    console.log(personObj);
  };
  render() {
    return (
      <div>
        <h1>Person component</h1>
        <input
          type="text"
          placeholder="please type name"
          ref={(c) => (this.nameNode = c)}
        />&nbsp;
        <input
          type="text"
          placeholder="please type age"
          ref={(c) => (this.ageNode = c)}
        />&nbsp;
        <button onClick={this.addPerson}>add person</button>
        <ul>
          <li>name1--age1</li>
          <li>name2--age2</li>
          <li>name3--age3</li>
        </ul>
      </div>
    );
  }
}
