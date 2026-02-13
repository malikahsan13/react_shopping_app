import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[
        {id:1, name:'Laptop', price:50000},
        {id:2, name:'Phone', price:20000},
        {id:3, name:'Charger', price:3000},
        {id:4, name:'Headphones', price:2500},
        {id:5, name:'Power Bank', price:7000}
    ],
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart:(state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        clearCart: (state) => {state.cart = []}
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;