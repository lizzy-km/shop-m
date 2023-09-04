// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const token = '4670|YJruWtMUezqugaMyItredXeTKephtz6Dq4SR1uUh'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://contact-app.mmsdev.site/api/v1', 
    }),
    
  tagTypes:["auth"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query:(user)=>({
        url:"/register",
        method:"POST",
        body:user,
      }),
      invalidatesTags:["auth"]
    }),

    login: builder.mutation({
      query:(user) =>({
          url:'/login',
          method:'POST',
          body:user,
      }),
      invalidatesTags:["auth"]
  }),

    logout: builder.mutation({
      query:() =>({
        url:'/user-logout',
        method:'POST',
        headers:{Authorization: `Bearer ${token}` },
    }),
    }),
    Contact: builder.mutation({
      query:(contact) =>({
          url:'/contact',
          method:'POST',
          body:contact,
          headers:{Authorization: `Bearer ${token}` },
      }),
      invalidatesTags:["auth"]
  }),
  getContact: builder.query({
    query:(id) =>({
        url:`/contact/${id}`,
        method:'GET',
        
        headers:{Authorization: `Bearer ${token}` },
    }),
    providesTags:["auth"]
}),
  

  }),
  
  
})

export const { useRegisterMutation, useLoginMutation,useLogoutMutation,useContactMutation,useGetContactQuery} = authApi