import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const CartSlice = createSlice({
    name: 'cart',
    initialState: { 
        cart: []
        },
    reducers: {
        
      AddToCart:(state, {payload})=> {
        const productExit = cart.find((item)=>item.id === product.id)
    if(productExit){
        state.cart =cart.map((item)=>
      (item.id === payload.id? { ... productExit, qty:productExit.qty + 1 
      } : item ))

    }
        
        Cookies.set('Cart', JSON.stringify(state))
      },
    },
  })
  export const isCartSelector = state => state.cart !== null;

    export const { AddToCart } = CartSlice.actions
    export default CartSlice.reducer