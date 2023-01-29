/* 
		该文件专门用于为count组件创建action对象
*/
import {INCREMENT,DECREMENT} from './action_types'

//创建一个“加”的action
export const createIncrementAction = value => ({type:INCREMENT,data:value})

//创建一个“减”的action
export const createDecrementAction = value => ({type:DECREMENT,data:value})