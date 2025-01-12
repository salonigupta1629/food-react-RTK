import { FaStar } from "react-icons/fa6";

export default function FoodCard({img,name,price,desc,rating}){
    return(
        <div className="w-[240px] h-[325px] p-5 bg-white ">
<img src={img} className="w-56 h-36 transition-all duration-500 hover:scale-110 cursor-grab ease-in-out" alt ="error" />
<span className="flex flex-1 justify-between items-center">
    <h2 className="font-bold">{name}</h2>  
    <p className="font-medium text-yellow-300">₹{price}</p>
</span>
<p className="overflow-hidden font-medium ">{desc.slice(0,50)}..</p>
    <div className="flex flex-1 justify-between items-center gap-20 absolute bottom-2">
<span className="flex justify-start items-center gap-1">
    <FaStar className="text-yellow-400"/>{rating}
</span>
    <button className=' px-1 py-1  bg-yellow-500 text-white hover:bg-black rounded-lg font-medium '>Add to cart</button>
</div>
        </div>
    )
}