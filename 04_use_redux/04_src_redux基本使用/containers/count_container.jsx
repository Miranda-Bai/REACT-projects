/* 
	该文件是容器组件，有如下特点：
		1.可以“肆无忌惮”的使用redux的API
		2.可以UI组件和redux建立起联系
		3.可以给UI传递：(1).状态 (2).操作状态的方法 备注：靠props传递。
*/

//引入UI组件
import Count from "../components/Count";
//从react-redux中引入connect方法
import { connect } from "react-redux";
//引入action_creator
import {
  createIncrementAction,
  createDecrementAction,
} from "../redux/count_action_creator";

/* 
	mapStateToProps方法专门用于给UI组件传递redux中的状态，以props形式传递
			因为：props是key-value的形式，所以mapStateToProps方法必须返回一个对象
			mapStateToProps方法返回的那个对象的key就作为传递给UI组件props的key
			mapStateToProps方法返回的那个对象的value就作为传递给UI组件props的value 
*/
function mapStateToProps(state) {
  return {number:state}
  // state本身是一个对象 {count: val} 直接返回state即可
//   console.log("count-container:", state);
//   return state;
}

/* 
	mapDispatchToProps方法专门用于给UI组件传递操作状态的方法，以props形式传递
			因为：props是key-value的形式，所以mapDispatchToProps方法必须返回一个对象
			mapDispatchToProps方法返回的那个对象的key就作为传递给UI组件props的key
			mapDispatchToProps方法返回的那个对象的value就作为传递给UI组件props的value 
*/
function mapDispatchToProps(dispatch) {
  return {
    jia: (value) => {
      dispatch(createIncrementAction(value));
    },
    jian: (value) => {
      dispatch(createDecrementAction(value));
    },
  };
}

//创建好为Count服务的容器组件，并且为Count组件传递了：(1).状态 (2).操作状态的方法。
export default connect(mapStateToProps, mapDispatchToProps)(Count);

/* 
	关于connect你要知道的：
		1.connect是一个函数，他调用的返回值依然是一个函数。
		2.connect()()可以创造一个容器组件。
		3.使用形式：connect(函数1，函数2/对象)(Demo组件)
		4.上方的：
				(1)函数1用于给UI组件传递状态.
				(2)函数2用于给UI组件传递操作状态的方法，函数2也可以被一个对象所代替。
				(3)Demo组件是指明：生成的容器组件为Demo组件服务
*/
