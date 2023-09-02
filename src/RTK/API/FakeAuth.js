import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fakeAuthApi = createApi({
  
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://fakestoreapi.com/auth/', 
    }),
    
  tagTypes:["fakeAuth"],
  endpoints: (builder) => ({


    fakeLogin: builder.mutation({
        query:(user) =>({
            url:'/login',
            method:'POST',
            body:user,
        }),
        invalidatesTags:["auth"]
    }),

    
  }),
  
})

export const { useFakeLoginMutation } = fakeAuthApi