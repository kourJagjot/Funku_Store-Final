// src/features/cart/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../api/cart";

const initialState = loadState() || {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      saveState(state); // Save to local storage
    },
    removeFromCart: (state, action) => {
      state.items.splice(action.payload, 1);
      saveState(state); // Save to local storage
    },
    clearCart: (state) => {
      state.items = [];
      saveState(state); // Save to local storage
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
