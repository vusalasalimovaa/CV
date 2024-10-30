import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";
import basketReducer from "./BasketSlice";
import favReducer from "./FavSlice";
import detailReducer from "./DetailSlice"

export const store = configureStore({
  reducer: {
    card: cardReducer,
    basket: basketReducer,
    fav: favReducer,
    detail: detailReducer
  },
});
