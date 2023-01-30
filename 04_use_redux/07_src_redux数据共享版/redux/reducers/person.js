import { ADD_PERSON } from "../constant";
//初始化person列表
const initState = [{ id: "001", name: "Tome", age: 18 }];

export default function personReducer(preState=initState, action) {
  // console.log("person reducer")
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON://添加一个person
      return [data, ...preState];
    default:
      return preState;
  }
}
