/* 
		该文件专门用于为count组件创建action对象
*/
import {INCREMENT,DECREMENT} from './action_types'

//创建一个“加”的action
export const createIncrementAction = value => ({type:INCREMENT,data:value})

//创建一个“减”的action
export const createDecrementAction = value => ({type:DECREMENT,data:value})

// 异步action, action的值为函数, 异步action中一般会调用同步action
export const createIncrementAsyncAction = (value,time)=>{
     // 通知redux调用increment，因为是redux调用，所以会接收到dispatch
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(value))
        }, time);
    }
}