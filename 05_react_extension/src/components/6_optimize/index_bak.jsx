import React from "react";
import { useState } from "react";
import "./index.css"

export default function Parent() {
    const [state, setState] = useState({carName:"BENCHI"})
    
    function handleChangCar(){
        setState({...state,age:20,carName:"Mazda"})
        // setState({})
    }
  return (
    <div className="parent">
        {
            console.log("state:",state)
        }
      <h3>Parent component</h3>
      <h3>car is {state.carName}</h3>
      <button onClick={handleChangCar}> change car </button>
      {/* <Child carName={state.carName} /> */}
      <Child />
    </div>
  );
}

function Child(props) {
  return (
    <div className="child">
        {
            console.log("child",)
        }
      <h3>Child component</h3>
      {/* <h3>car is {props.carName}</h3> */}
    </div>
  );
}
