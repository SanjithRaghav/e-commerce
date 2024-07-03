import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../api";
import productReducer from '../slice/productSlice'


const store=configureStore({
    reducer:{
        [productApi.reducerPath]:productApi.reducer, 
        productState: productReducer,    
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})


export default store
