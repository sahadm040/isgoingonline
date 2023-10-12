import { createSlice } from "@reduxjs/toolkit";
import { allList, SingleView } from "../api/post.route";
const initialState = {
  data: null,
  productViewArray: [],
  productView: {},
};
const postSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: {
    [allList.pending]: () => {
      console.log("allList pending");
    },
    [allList.fulfilled]: (state, action) => {
      console.log("allList fulfilled");
      state.productViewArray = action.payload;
    },
    [allList.rejected]: () => {
      console.log("allList rejected");
    },
    [SingleView.pending]: () => {
      console.log("singleView pending");
    },
    [SingleView.fulfilled]: (state, action) => {
      console.log("singleView fulfilled");
      state.productView = action.payload;
    },
    [SingleView.rejected]: () => {
      console.log("singleView rejected");
    },
  },
});

export default postSlice.reducer;
