import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { product } from "./type/type"


export const productApi=createApi({
    reducerPath: 'productsApi',
    baseQuery:fetchBaseQuery({baseUrl:" https://fakestoreapi.com/"}),
    endpoints:(build)=>({
       prodData:build.query<product[],number>({
            query:(limit:number)=>({
                url:'products',
                params:{limit:limit},
                headers:{
                    Authorization:('bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTcxOTk0MDM5MX0.8mADuyP6LydSw0TYyE-RQARKgdtbix-1PGm76E1oG9s')
                },
                method:'GET'
            })
        }),




    })
})

export const {useProdDataQuery}=productApi