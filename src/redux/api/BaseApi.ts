import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://devapi.beyondchats.com/api' }),
  endpoints: (builder) => ({
    getAllChats: builder.query({
      query: (param) =>{
        const params = new URLSearchParams()
        if(param){
          params.append('chat_id', param)
        }
        return{
          url: 'get_chat_messages',
          method: 'GET',
          params
        }
      }
    })
  }),
  })

 export const {useGetAllChatsQuery} = baseApi
