import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const initialState= { 
  cart: [],
  quantity:0,
  totalamount:0,
  oneItemPrice:0,
  };

  
const STORAGE_KEY_Cart = 'Cart'






//____________________________________________________storedToken_____________________Null_____//
const storedCart = Cookies.get(STORAGE_KEY_Cart) ? JSON.parse(Cookies.get(STORAGE_KEY_Cart)) : null;

if (storedCart) { 
initialState.cart = storedCart.cart
initialState.quantity = storedCart.quantity
initialState.totalamount= storedCart.totalamount
initialState.oneItemPrice = storedCart.oneItemPrice
}


const CartSlice = createSlice({
    name: 'cart',
    initialState,


    reducers: {
        
      AddToCart: (state, { payload }) => {
        // Check if the product with the same id already exists in the cart
        const existingProduct = state.cart.find((item) => item.id === payload.id);
      
        if (existingProduct) {
          // If the product exists, increase its quantity and update the item price
          state.cart = state.cart.map((item) =>
            item.id === payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  oneItemPrice: (item.quantity + 1) * payload.price,
                }
              : item
          );
        } else {
          // If the product doesn't exist, add it to the cart with quantity 1
          state.cart.push({ ...payload, quantity: 1, oneItemPrice: payload.price });
        }
      
        // Calculate the total amount by summing up the prices of all items in the cart
        state.totalamount = state.cart.reduce(
          (total, item) => total + item.oneItemPrice,
          0
        );
      
        // Save the updated cart state to local storage (assuming Cookies.set() is used for that purpose)
        Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
      },
      

      addPrice:(state,{payload})=>{

        // const Cprice = Cookies.get(STORAGE_KEY_Cart)
        // const PCprice = JSON.parse(Cprice)?.cart
        // const priceR = PCprice?.filter(data => data.id === payload.id) 

        // state.oneItemPrice = priceR[0].price*state.quantity
        // state.totalamount =+ state.oneItemPrice;
        // Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));


      },

      
      
      removeCart: (state, { payload }) => {

        state.cart = state.cart?.filter(
          (item) => item?.id !== payload?.id,
        );
        state.quantity--;
       

        state.oneItemPrice--
        state.totalamount =- state.oneItemPrice;

        Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
      },

      subtractCartQuantity: (state, { payload }) => {
        // Find the item in the cart by its id
        const itemToUpdate = state.cart.find((item) => item.id === payload.id);
      
        if (itemToUpdate && itemToUpdate.quantity > 1) {
          // Decrease the quantity of the item and update the item price
          itemToUpdate.quantity -= 1;
          itemToUpdate.oneItemPrice = itemToUpdate.quantity * payload.price;
      
          // Update the total quantity in the cart
          state.quantity -= 1;
      
          // Calculate the total amount by summing up the prices of all items in the cart
          state.totalamount = state.cart.reduce(
            (total, item) => total + item.oneItemPrice,
            0
          );
      
          // Save the updated cart state to local storage (assuming Cookies.set() is used for that purpose)
          Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
        }
      },
      
    minusPrice:(state,{payload})=>{

      // const Cprice = Cookies.get(STORAGE_KEY_Cart)
      // const PCprice = JSON.parse(Cprice)?.cart
      // const priceR = PCprice?.filter(data => data.id === payload.id) 

      // state.oneItemPrice = priceR[0].price*state.quantity
      // state.totalamount =- state.oneItemPrice;
      // Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));


    },
    },
  })
  export const isCartSelector = state => state.cart.length !== 0;

    export const { AddToCart,removeCart,subtractCartQuantity,addPrice,minusPrice } = CartSlice.actions
    export default CartSlice.reducer