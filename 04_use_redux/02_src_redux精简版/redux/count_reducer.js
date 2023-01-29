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

// export const selectCount = (state) => state.count_reducer.sum

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(amount));
  }, 1000);
};
