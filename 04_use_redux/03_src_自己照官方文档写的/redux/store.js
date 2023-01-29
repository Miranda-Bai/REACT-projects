// configureStore replaced createStore
import { configureStore } from '@reduxjs/toolkit'
import countReducer from "./count_reducer"

export default configureStore({
    reducer:{count:countReducer}
})
