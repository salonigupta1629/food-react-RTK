import { IoIosClose } from "react-icons/io";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Cart() {
const[activeCart ,setActiveCart] = useState(false);
    const carts = useSelector((data) => data.cartData.cart);
    console.log(carts);
    const totalItem = carts.reduce((totalQty,item) => totalQty + item.qty, 0);
    const totalPrice = carts.reduce((total, item) => total + item.qty * item.price, 0);

    const navigate = useNavigate();

    return (
      <>
        <div className={`w-[300px] h-[699px] bg-white  p-4 fixed right-0 top-0  ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
            <span className="flex justify-between items-center">
                <h1 className="font-semibold text-xl">My Order</h1>
                <IoIosClose onClick={() =>setActiveCart(!activeCart)} className="border-2
                 w-7 h-6 hover:text-red-500 hover:border-red-500 text-center rounded-md border-gray-400" />
            </span>
            <div className=" mt-6 overflow-y-scroll h-[500px]">
                {
                    carts.length  ?
                    carts.map((food) => (

                        <ItemCart key={food.id} id={food.id} name={food.name} img={food.img} price={food.price} qty={food.qty}/>
                    )) : <h2 className="text-center font-semibold text-lg mt-6 text-gray-500">Your cart is empty!</h2>
                }
            </div>
            <div className="flex flex-col font-semibold absolute bottom-2">
                <p>Items: {totalItem}</p>
                <p>Total Amount: ₹{totalPrice}</p>
                <button onClick={()=> navigate("/success")} className='w-[280px] h-[40px] bg-yellow-500 mt-4 hover:bg-black hover:text-white text-white  rounded-lg '>Checkout</button>
            </div>
        </div>
< FaShoppingCart onClick={() =>setActiveCart(!activeCart)} className={`w-12 bg-white h-8 rounded-full py-1 px-2 fixed bottom-5 right-7 ${ totalItem > 0  && "animate-bounce delay-500 transition-all "} `}/>
      </>
    )
}