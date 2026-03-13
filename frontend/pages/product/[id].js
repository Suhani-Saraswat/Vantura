import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductPage(){

const router = useRouter()
const {id} = router.query

const [product,setProduct] = useState(null)

useEffect(()=>{

if(id){
axios.get(`http://localhost:5000/api/products/${id}`)
.then(res=>setProduct(res.data))
}

},[id])

if(!product) return <p>Loading...</p>

return(

<div className="p-10">

<img src={product.image} className="h-64"/>

<h1 className="text-2xl font-bold">{product.name}</h1>

<p>{product.description}</p>

<p className="text-xl">₹{product.price}</p>

</div>

)

}