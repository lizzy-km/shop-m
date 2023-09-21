import { createSlice } from "@reduxjs/toolkit"

const AuthSlice = createSlice({
    name: 'auth',
    initialState: { 
        user: []
        },
    reducers: {
      AddUser:(state, {payload})=> {
        (state.user = payload)

      },
    },
  })
  export const isAuthSelector = state => state?.user !== null;

    export const { AddUser } = AuthSlice.actions
    export default AuthSlice.reducer