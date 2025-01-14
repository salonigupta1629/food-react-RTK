import { IoIosClose } from "react-icons/io";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";

export default function Cart() {

    const carts = useSelector((data) => data.cartData.cart);
    console.log(carts);
    
    return (
        <div className="w-[300px] h-[699px] bg-white  p-4 fixed right-0 top-0">
            <span className="flex justify-between items-center">
                <h1 className="font-semibold text-xl">My Order</h1>
                <IoIosClose className="border-2 w-7 h-6 hover:text-red-500 hover:border-red-500 text-center rounded-md border-gray-400" />
            </span>
            <div className=" mt-6 overflow-y-scroll h-[500px]">
                {
                    carts.map((food) => (

                        <ItemCart key={food.id} id={food.id} name={food.name} img={food.img} price={food.name.price} />
                    ))
                }
            </div>
            <div className="flex flex-col font-semibold absolute bottom-2">
                <p>Items: 1</p>
                <p>Total Amount: ₹100</p>
                <button className='w-[280px] h-[40px] bg-yellow-500 mt-4 hover:bg-black hover:text-white text-white  rounded-lg '>Checkout</button>
            </div>
        </div>
    )
}