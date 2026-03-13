import Link from "next/link";

export default function Navbar(){

return(

<nav className="bg-white shadow p-4 flex justify-between">

<h1 className="text-2xl font-bold">
ShopEasy
</h1>

<div className="space-x-6">

<Link href="/">Home</Link>

<Link href="/cart">Cart</Link>

</div>

</nav>

)

}