import { useEffect, useState } from "react";

const useProducts=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://nameless-fortress-97530.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
            },[]);

            return[products,setProducts]

}

export default useProducts;