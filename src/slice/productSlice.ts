import { createSlice } from "@reduxjs/toolkit"
import { product } from "../type/type"




export interface productState{
    products:product[],
    filteredProducts:product[],
    search:string

}

const initialState:productState={
    products:[],
    filteredProducts:[],
    search:''
}


interface filters{
    category?:string[],
    price?:[number,number],
    rating?:number
}

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts:(state:productState,action:{payload:product[],type:String})=>{
            state.products=action.payload
            
        },
        filterProducts:(state:productState,action:{payload:filters,type:String})=>{
            console.log(action.payload)

            state.filteredProducts=state.products.filter((p)=>{

                return (p.category.toLowerCase().includes(state.search.toLowerCase())) || (p.title.toLowerCase().includes(state.search.toLowerCase()))

            })
            // console.log(state.filteredProducts)

            
            state.filteredProducts=state.filteredProducts.filter((p)=>{
                if(action.payload?.category){
                    if(action.payload.category.length==0)
                        return true
                    return action.payload.category.find((s)=>(s==p.category))
                }
                return true
            })
            // console.log(state.filteredProducts)
            state.filteredProducts=state.filteredProducts.filter((p)=>{

                if(action.payload?.price)
                    return p.price>=action.payload.price[0] && p.price<=action.payload.price[1]
                return true
            })
            // console.log(state.filteredProducts)

            state.filteredProducts=state.filteredProducts.filter((p)=>{

                if(action.payload?.rating)
                    return p.rating.rate>=action.payload.rating
                return true
            })
            // console.log(state.filteredProducts)

        },
        searchFilterProducts:(state:productState,action:{payload:string,type:String})=>{
            state.search=action.payload
            state.filteredProducts=state.products.filter((p)=>{

                return (p.category.toLowerCase().includes(state.search.toLowerCase())) || (p.title.toLowerCase().includes(state.search.toLowerCase()))

            })
        }
    }
})


export const {setProducts,filterProducts,searchFilterProducts}=productSlice.actions
export default productSlice.reducer