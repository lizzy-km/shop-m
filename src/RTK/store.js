import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Services/AuthSlice'
import CartSlice from './Services/CartSlice'
import { fakeAuthApi } from './API/FakeAuth'
import { authApi } from './API/Auth'



export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [fakeAuthApi.reducerPath]: fakeAuthApi.reducer,


    AuthSlice : AuthSlice,
    CartSlice : CartSlice,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,fakeAuthApi.middleware),
})