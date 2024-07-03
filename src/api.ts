import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { product } from "./type/type"


export const productApi=createApi({
    reducerPath: 'productsApi',
    baseQuery:fetchBaseQuery({
        baseUrl:" https://fakestoreapi.com/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints:(build)=>({
       prodData:build.query<product[],number>({
            query:(limit:number)=>({
                url:'products',
                params:{limit:limit},
              
                method:'GET'
            })
        }),
        signup:build.mutation({
            query:(user)=>({
                url:'users',
                method:'POST',
                body:user,
                headers:{
                    'Content-Type': 'application/json',
                }
            })
        }),
        login:build.mutation({
            query:(user)=>({
                url:'auth/login',
                method:'POST',
                body:user,
                headers:{
                    'Content-Type': 'application/json',
                }
            })
        })
        
    })
})

export const {useProdDataQuery,useSignupMutation,useLoginMutation}=productApi