import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiKey = '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'



export const OpenAi = createApi({


  
  reducerPath: 'OpenAi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://api.openai.com/v1/images', 
    }),
    
  tagTypes:["OpenAi"],
  endpoints: (builder) => ({


    
    getImages: builder.mutation({
      query:(title) =>({
          url:`/generations`,
          method:'POST',
          mode:'no-cors',
          params:{
            prompt:title
          },
          headers:{Authorization: `Bearer ${apiKey}` }
          
         
      }),
      providesTags:["OpenAi"]
  }),
  getSingleProducts: builder.query({
    query:(id) =>({
        url:`/products/${id}`,
        method:'GET',
        
       
    }),
    providesTags:["OpenAi"]
}),

    
  }),
  
})

export const { useGetImagesMutation } = OpenAi