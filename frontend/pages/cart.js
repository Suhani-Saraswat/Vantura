import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart(){

const {cart} = useContext(CartContext)

return(

<div className="p-10">

<h1 className="text-2xl font-bold mb-6">
Your Cart
</h1>

{cart.map((item,i)=>(
<div key={i} className="border p-3 mb-2">

{item.name} - ₹{item.price}

</div>
))}

</div>

)

}