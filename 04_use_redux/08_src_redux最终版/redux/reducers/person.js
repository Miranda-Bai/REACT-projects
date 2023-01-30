import { ADD_PERSON } from "../constant";
//初始化person列表
const initState = [{ id: "001", name: "Tome", age: 18 }];

export default function personReducer(preState=initState, action) {
  // console.log("person reducer")
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON://添加一个person
      return [data, ...preState]; 
      //不能用preState.unshift(data) return preState，因为reducer是纯函数，只会浅比较，preState指向没变，redux就认为state没有更新
    default:
      return preState;
  }
}
