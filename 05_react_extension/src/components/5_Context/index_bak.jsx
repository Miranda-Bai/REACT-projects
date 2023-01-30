import React, { useState } from "react";
import "./index.css"

export default function TestA() {
  const [userName] = useState("Tom");
  return (
    <div className="parent">
      <h3>A component</h3>
      <h4>user name is {userName}</h4>
      <TestB userName={userName} />
    </div>
  );
}

function TestB(props) {
  return (
    <div className="child">
      <h3>B component</h3>
      <h4>user name is {props.userName}</h4>
      <TestC userName={props.userName}/>
    </div>
  );
}

function TestC(props) {
  return (
    <div className="grand">
      <h3>C component</h3>
      <h4>user name is {props.userName}</h4>
    </div>
  );
}
