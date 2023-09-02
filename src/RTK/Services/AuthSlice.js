import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const AuthSlice = createSlice({
    name: 'auth',
    initialState: { 
        user: []
        },
    reducers: {
      AddUser:(state, {payload})=> {
        state.user = [...state.user,payload]
        Cookies.set('User', JSON.stringify(state))
      },
    },
  })
  export const isAuthSelector = state => state?.user !== null;

    export const { AddUser } = AuthSlice.actions
    export default AuthSlice.reducer