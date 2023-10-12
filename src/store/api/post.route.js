import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosInstance/axiosInstance";

// ----------------------------------- all products api------------------------------------/

export const allList = createAsyncThunk("products", async () => {
  const response = await axiosApi.get("products");
  console.log("response", response);
  return response.data;
});

// ----------------------------------- single product api------------------------------------/

export const SingleView = createAsyncThunk("productSingleView", async (id) => {
  const response = await axiosApi.get(`products/${id}`);
  console.log("response", response);
  return response.data;
});
