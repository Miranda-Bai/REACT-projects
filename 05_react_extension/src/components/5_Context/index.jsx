import React, { useState, createContext } from "react";
import { useContext } from "react";
import "./index.css";

// 创建保持username的上下文
const MyContext = createContext();
const { Provider, Consumer } = MyContext;

export default function TestA() {
  const [person] = useState({ userName: "Tom", age: 19 });
  return (
    <div className="parent">
      <h3>A component</h3>
      <h4>
        user name is {person.userName} ---- {person.age}
      </h4>
      <Provider value={person}>
        <TestB />
      </Provider>
    </div>
  );
}

function TestB() {
  return (
    <div className="child">
      <h3>B component</h3>
      <h4>user name is </h4>
      <TestC />
    </div>
  );
}

function TestC() {
  // 声明接收context,可以跳过B组件，让C直接使用userName
  /* const person = useContext(MyContext);
  return (
    <div className="grand">
      <h3>C component</h3>
      <h4>user name is {person.userName} --- {person.age}</h4>
    </div>
  ); */
  return (
    <div className="grand">
      <h3>C component</h3>
      <Consumer>
        {(person) => {
          return (
            <h4>
              user name is {person.userName} --- {person.age}
            </h4>
          );
        }}
      </Consumer>
    </div>
  );
}
