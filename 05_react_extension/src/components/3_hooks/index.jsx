import React, { useState, useEffect, useRef } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Miranda");
  //   console.log(count, setCount);

  const myRef=useRef()

  //[]中可以定义检测谁更新，空数组就不监测任何更新,则第一个回调函数之后初始化的时候更新一次
  //组件卸载时执行return中的回调函数
  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return ()=>{
        clearInterval(timer)
    }
  }, []);

  function increment() {
    // 第一种写法
    // setCount(count + 1);
    // 第二种写法
    setCount((count) => count + 1);
  }
  function changeName() {
    setName("Ying");
  }
  function show(){
    alert(myRef.current.value)
    myRef.current.value=""
  }
  return (
    <div>
        <input type="text" ref={myRef} defaultValue="Good day!" />
      <h2>current sum is {count}</h2>
      <button onClick={increment}> +1 </button>
      <hr />
      <h2>The name is {name}</h2>
      <button onClick={changeName}>change name</button>
      <button onClick={show}>show ref-input</button>
    </div>
  );
}
