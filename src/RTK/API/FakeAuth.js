import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fakeAuthApi = createApi({
  
  reducerPath: 'fakeAuthApi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://api.escuelajs.co/api/v1', 
    }),
    
  tagTypes:["fakeAuth"],
  endpoints: (builder) => ({


    fakeLogin: builder.mutation({
        query:(user) =>({
            url:'/users/',
            method:'POST',
            body:user,
        }),
        invalidatesTags:["fakeAuth"]
    }),
    getProducts: builder.query({
      query:() =>({
          url:`/products/`,
          method:'GET',
          
         
      }),
      providesTags:["fakeAuth"]
  }),
  getCategories: builder.query({
    query:() =>({
        url:`/categories`,
        method:'GET',
        
       
    }),
    providesTags:["fakeAuth"]
}),
  getSingleProducts: builder.query({
    query:(id) =>({
        url:`/products/${id}`,
        method:'GET',
        
       
    }),
    providesTags:["fakeAuth"]
}),
getSingleUser: builder.query({
  query:() =>({
      url:`/users`,
      method:'GET',
      
     
  }),
  providesTags:["fakeAuth"]
}),
createProducts: builder.mutation({
  query:(products) =>({
      url:`/products/`,
      method:'POST',
      body:products
      
     
  }),
  invalidatesTags:["fakeAuth"]
}),
createCategories: builder.mutation({
  query:(category) =>({
      url:`/categories/`,
      method:'POST',
      body:category
      
     
  }),
  invalidatesTags:["fakeAuth"]
}),


    
  }),
  
})

export const { 
  useFakeLoginMutation,
  useGetProductsQuery,
  useGetSingleProductsQuery,
  useGetSingleUserQuery,
  useGetCategoriesQuery,
  useCreateProductsMutation,
  useCreateCategoriesMutation
 } = fakeAuthApi