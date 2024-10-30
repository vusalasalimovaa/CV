import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baskets: JSON.parse(localStorage.getItem("baskets")) || [],
  basketTotalQuantity: 0,
  basketTotalAmount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemIndex = state.baskets.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.baskets[itemIndex].basketQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, basketQuantity: 1 };
        state.baskets.push(tempProduct);
      }

      localStorage.setItem("baskets", JSON.stringify(state.baskets));
    },
    removeFromBasket: (state, action) => {
      const removeBasketItem = state.baskets.filter(
        (basketItem) => basketItem.id !== action.payload.id
      );
      state.baskets = removeBasketItem;
      localStorage.setItem("baskets", JSON.stringify(state.baskets));
    },
    decreaseBasket: (state, action) => {
      const itemIndex = state.baskets.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.baskets[itemIndex].basketQuantity > 1) {
        state.baskets[itemIndex].basketQuantity -= 1;
      } else if (state.baskets[itemIndex].basketQuantity == 1) {
        const removeBasketItem = state.baskets.filter(
          (basketItem) => basketItem.id !== action.payload.id
        );
        state.baskets = removeBasketItem;
      }
      localStorage.setItem("baskets", JSON.stringify(state.baskets));
    },
    clearBasket: (state, action) => {
      state.baskets = [];
      localStorage.setItem("baskets", JSON.stringify(state.baskets));
    },
    getTotal: (state, action) => {
      let { total } = state.baskets.reduce(
        (cartTotal, cartElem) => {
          const { price, basketQuantity } = cartElem;
          const elemTotal = price * basketQuantity;

          cartTotal.total += elemTotal;

          return cartTotal;
        },
        {
          total: 0,
        }
      );

      state.basketTotalAmount = total;
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  decreaseBasket,
  clearBasket,
  getTotal,
} = basketSlice.actions;
export default basketSlice.reducer;
