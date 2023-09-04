import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fakeAuthApi = createApi({
  
  reducerPath: 'fakeAuthApi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://fakestoreapi.com/auth/', 
    }),
    
  tagTypes:["fakeAuth"],
  endpoints: (builder) => ({


    fakeLogin: builder.mutation({
        query:(user) =>({
            url:'/login',
            method:'POST',
            body:JSON.stringify({
              username:`${user.username}`,
              password:`${user.password}`
            }),
        }),
        invalidatesTags:["fakeAuth"]
    }),

    
  }),
  
})

export const { useFakeLoginMutation } = fakeAuthApi