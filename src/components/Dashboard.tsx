import { useDispatch } from "react-redux";
import { useProdDataQuery } from "../api";
import { filterProducts, setProducts } from "../slice/productSlice";
import { useEffect, useState } from "react";
import { Products } from "./Products";
import { useNavigate } from "react-router-dom";
import { Filter } from "./Filter";
interface Filter {
    category: string[];
    price: [number, number];
    rating: number;
  }
export const Dashboard=()=>{
    const [fil,setFil]=useState<Filter>({category:[],price:[0,250000],rating:0})
    const [limit,setLimit]=useState(12)
    const navigate=useNavigate()
    const { data: products, error, isLoading } = useProdDataQuery(limit);
    // console.log(limit)
    if(error){
        console.log(error)
    }
   
    const dispatch=useDispatch()
    useEffect(() => {
      
        if (products) {
          dispatch(setProducts(products));
          dispatch(filterProducts(fil))
        }
      }, [products, dispatch,fil]);

    // console.log(isLoading)
    return (
        <div className="dashboard">
            <Filter fil={fil} setFil={setFil}/>
            <Products setLimit={setLimit} limit={limit}/>
            {isLoading && <p>loading...</p>}
        </div>
    )
}