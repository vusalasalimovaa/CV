import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";
import basketReducer from "./BasketSlice";
import favReducer from "./FavSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    basket: basketReducer,
    fav: favReducer,
  },
});
