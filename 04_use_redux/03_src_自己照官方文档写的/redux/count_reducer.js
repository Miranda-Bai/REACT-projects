import { createSlice } from "@reduxjs/toolkit";

export const countReducer = createSlice({
  name: "count_reducer",
  initialState: {
    sum: 0,
  },
  reducers: {
    increment: (state, action) => {
      const { sum } = state;

      state.sum = sum + action.payload;
      //   console.log("increment", sum, action.payload)
      //   console.log("increment", state.sum)
    },
    decrement: (state, action) => {
      state.sum -= action.payload;
    },
    incrementIfOdd: (state, action) => {
      if (state.sum % 2 !== 0) {
        state.sum += action.payload;
      }
    },
    // incrementAsync: (state, action) => {
    //     console.log("async1:")
    //   /* setTimeout(() => {
    //     dispatch(increment())
    //     // state.sum += action.payload;
    //     console.log("async2:", action.payload)
    //   }, 1000); */
    // },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementIfOdd } = countReducer.actions;

export default countReducer.reducer;
// 这个需要在用到的组件中使用useSelector hook， hook类的函数只能在函数组件中使用
export const selectCount = (state) => {
  console.log("selectCount: ",state)
  return state.count.sum
}

// 异步action, action的值为函数, 异步action中一般会调用同步action
export const incrementAsync = (amount, time) => {
  // 通知redux调用increment，因为是redux调用，所以会接收到dispatch
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(amount));
    }, time);
  }
};
