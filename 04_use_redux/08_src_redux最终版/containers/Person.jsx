import React, { Component } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { addPersonAction } from "../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value*1;
    // console.log(name, age);
    const personObj = { id: nanoid(), name, age };
    // console.log(personObj);
    //通知redux添加person
    this.props.addPerson(personObj)
    //清空输入框
    this.nameNode.value="";
    this.ageNode.value=""

  };
  render() {
    console.log("person component:", this.props);
    const {personLst,count} = this.props 
    return (
      <div>
        <h1>Person component</h1>
        <h2>Count component current sum is {count}</h2>
        <input
          type="text"
          placeholder="please type name"
          ref={(c) => (this.nameNode = c)}
        />
        &nbsp;
        <input
          type="text"
          placeholder="please type age"
          ref={(c) => (this.ageNode = c)}
        />
        &nbsp;
        <button onClick={this.addPerson}>add person</button>
        <ul>
          {
            personLst.map(pObj=>{
              return <li key={pObj.id}>{pObj.name} -- {pObj.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
export default connect(
  (state) => ({ personLst: state.person, count:state.count }), 
 /*  (state)=>{
    console.log("@state:",state)
    return {personLst: state.person}
  }, */
  {
  addPerson: addPersonAction,
  })(Person);
