import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cards: [],
};

export const getAllCards = createAsyncThunk("cards", async () => {
  const response = await axios.get("http://localhost:3000/products");
  //   console.log(response.data);
  return response.data;
});

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
});

export const {} = cardSlice.actions;
export default cardSlice.reducer;
