import { configureStore } from "@reduxjs/toolkit";
import toursReducer from "./slices/toursSlice";
import wishlistReducer from "./slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    tours: toursReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
