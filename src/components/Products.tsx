import { useSelector } from "react-redux"
import { product } from "../type/type"
import './dashboard.css'
import { useCallback, useRef } from "react"

export const Products=({setLimit,limit}:{setLimit: React.Dispatch<React.SetStateAction<number>>,limit:number})=>{
    const observer=useRef<IntersectionObserver | null>(null)
    const lastCardRef=useCallback((node:(HTMLDivElement | null))=>{
        // console.log(node)
        if(observer.current) observer.current.disconnect()
        observer.current=new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting && limit)
               setLimit((limit)=>(limit+3))
        })
        if(node)
            observer.current.observe(node)
    },[])


    const data:product[]=useSelector((state:any)=>(state.productState.filteredProducts))
    if(data.length<12 && limit<20){
        setLimit((limit)=>(limit+3))
    }
    const cards=data.map((p,i)=>{
        if(i==data.length-1)
            return (
            <div ref={lastCardRef} key={i} className="card">
                <img src={p.image}/>
                <p>{p.title}</p>

            </div>
            )
        else{
            return (
                <div  key={i} className="card">
                    <img src={p.image}/>
                    <p>{p.title}</p>
    
                </div>
                )
        }
    })



    return (
        <div>
            <div className="products">
                {cards}
            </div>
            
            
        </div>
    )
}