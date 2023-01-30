/* 
	count_reducer专门用于操作count组件的状态
*/
import {INCREMENT,DECREMENT} from '../constant'

export default function countReducer (preState=0,action){ //preState=0的含义是设置初始化状态
	// console.log("count reducer")
	//从action中获取type(加还是减？)、data(加几？减几？)
	const {type,data} = action
	//提前准备好一个newState用于返回
	let newState
	//根据type执行不同的逻辑
	switch (type) {
		case INCREMENT: //如果是加
			newState = preState + data
			//console.log(newState);
			return newState
		case DECREMENT: //如果是减
			newState = preState - data
			return newState
		default: //如果是初始化
			return preState
	}
}