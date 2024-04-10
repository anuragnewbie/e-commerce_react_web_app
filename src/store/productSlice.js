import { createSlice } from "@reduxjs/toolkit";

const products = [];

// creating slice and its reducers
const productSlice = createSlice({
    name: 'products',
    initialState: products,
    reducers:{
        addToCart: (state, action) =>
        {
           state.push(action.payload);
        },
        removeFromCart: (state, action) =>
        {
           state.splice(action.payload, 1)
        }
    }
});

export const {addToCart, removeFromCart} = productSlice.actions;
export default productSlice.reducer;
