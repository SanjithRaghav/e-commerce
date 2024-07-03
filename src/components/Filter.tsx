import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { filterProducts } from "../slice/productSlice";
interface Filter {
    category: string[];
    price: [number, number];
    rating: number;
  }
export const Filter=({fil,setFil}:{fil:Filter,setFil: React.Dispatch<React.SetStateAction<Filter>>})=>{
    const dispatch=useDispatch()

   
    const handleChangeCat=(e:ChangeEvent<HTMLInputElement>)=>{
        if(fil.category.indexOf(e.target.value)!=-1){
            setFil({...fil,category:fil.category.filter((val)=>(val!=e.target.value))})
        }
        else{
            setFil({...fil,category:[...fil.category,e.target.value]})
        }
       
        
    }
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name=="priceStart")
            setFil({...fil,price:[Number(e.target.value),fil.price[1]]})
        else if(e.target.name=="priceEnd"){
            setFil({...fil,price:[fil.price[0],Number(e.target.value),]})
        }
        else{
            setFil({...fil,rating:Number(e.target.value)})
        }
    }
    return (
    <>

        <input onChange={handleChangeCat} type="checkbox" name="women" value="women's clothing" />
        <label >Women's Clothing</label>
        <input onChange={handleChangeCat} type="checkbox" name="men" value="men's clothing" />
        <label >Men's Clothing</label>
        <input onChange={handleChangeCat} type="checkbox" name="jewel" value="jewelery" />
        <label >Jewellery</label>
        <input onChange={handleChange} placeholder="Price Start" name="priceStart" value={fil.price[0]} type="number"/>
        <input onChange={handleChange} placeholder="Price End" name="priceEnd" value={fil.price[1]} type="number"/>
        <input onChange={handleChange}  placeholder="Rating" name="rating" value={fil.rating} type="number"/>
    </>
    )
}