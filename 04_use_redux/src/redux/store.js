/* 
	整个redux中最最核心的store对象
*/
// configureStore replaced createStore
import { configureStore } from '@reduxjs/toolkit'
import countReducer from "./reducers/count"
import personReducer from "./reducers/person"

export default configureStore({
    reducer:{count:countReducer, person:personReducer}
})


/* //引入使用createStore方法，用于创建一个store对象
import {createStore} from 'redux'
//引入count_reducer
import countReducer from './count_reducer'

//创建并暴露一个store,同时指定了reducer ------- 老板在创业之初就找好了手下人
export default createStore(countReducer) */