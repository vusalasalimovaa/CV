import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      let existItemIndex = state.favorites.findIndex(
        (item) => item.id == action.payload.id
      );

      if (existItemIndex >= 0) {
        alert("This product already exists in your wishlist");
      } else {
        let buildFavItem = { ...action.payload };
        state.favorites?.push(buildFavItem);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },

    removeFav: (state, action) => {
      let removeFavItem = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );

      state.favorites = removeFavItem;
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    clearFav: (state, action) => {
      state.favorites = [];
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addToFav, removeFav, clearFav } = favSlice.actions;
export default favSlice.reducer;
