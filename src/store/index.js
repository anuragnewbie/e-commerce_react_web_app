import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice"

// creating store and configuring it
const store = configureStore({
  reducer: {
     productSlice
  }  
})

export default store;