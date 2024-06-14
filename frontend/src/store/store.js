// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
