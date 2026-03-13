import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({product}){

const {addToCart} = useContext(CartContext)

return(

<div className="bg-white p-4 rounded shadow">

<img src={product.image} className="h-40 w-full object-cover"/>

<h2 className="font-semibold mt-2">{product.name}</h2>

<p>₹{product.price}</p>

<div className="flex gap-2 mt-3">

<button
onClick={()=>addToCart(product)}
className="bg-yellow-500 text-white px-3 py-1 rounded"
>
Add to Cart
</button>

<Link href={`/product/${product._id}`}>
<button className="border px-3 py-1">
View
</button>
</Link>

</div>

</div>

)

}