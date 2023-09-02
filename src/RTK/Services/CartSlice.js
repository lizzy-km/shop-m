import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const CartSlice = createSlice({
    name: 'cart',
    initialState: { 
        cart: []
        },
    reducers: {
      AddToCart:(state, {payload})=> {
        state.cart = [...state.cart,payload]
        Cookies.set('Cart', JSON.stringify(state))
      },
    },
  })
  export const isCartSelector = state => state.cart !== null;

    export const { AddToCart } = CartSlice.actions
    export default CartSlice.reducer