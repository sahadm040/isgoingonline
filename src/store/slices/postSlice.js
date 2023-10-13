import { createSlice } from "@reduxjs/toolkit";
import { allList, SingleView } from "../api/post.route";
const initialState = {
  data: null,
  productViewArray: [],
  productView: {},
  loading: "false",
  cart: [],
  value: 0,
};
const postSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      console.log("cart", state.cart);
    },
    increment: (state) => {
      state.value += 1;
      console.log("value", state.value);
    },
  },
  extraReducers: {
    [allList.pending]: (state) => {
      console.log("allList pending");
      state.loading = "true";
    },
    [allList.fulfilled]: (state, action) => {
      console.log("allList fulfilled");
      state.loading = "false";
      state.productViewArray = action.payload;
    },
    [allList.rejected]: () => {
      console.log("allList rejected");
    },
    [SingleView.pending]: (state) => {
      console.log("singleView pending");
      state.loading = "true";
    },
    [SingleView.fulfilled]: (state, action) => {
      console.log("singleView fulfilled");
      state.productView = action.payload;
      console.log("action.payload", action.payload);
      state.loading = "false";
    },
    [SingleView.rejected]: () => {
      console.log("singleView rejected");
    },
  },
});

export const { addToCart, increment } = postSlice.actions;
export default postSlice.reducer;
