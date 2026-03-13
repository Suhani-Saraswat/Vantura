import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function Home(){

const [products,setProducts] = useState([])

useEffect(()=>{

axios.get("http://localhost:5000/api/products")
.then(res=>setProducts(res.data))

},[])

return(

<div>

<Navbar/>

<div className="grid grid-cols-4 gap-6 p-10">

{products.map(product=>(
<ProductCard key={product._id} product={product}/>
))}

</div>

</div>

)

}