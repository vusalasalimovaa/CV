import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  details: [],
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    addToDetail: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { addToDetail } = detailSlice.actions;
export default detailSlice.reducer;
