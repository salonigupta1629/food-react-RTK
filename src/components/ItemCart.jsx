import React from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { decreaseQty, increaseQty, removeFromcart } from '../redux/cartSlice';


const ItemCart = ({ id, name, img, price,qty }) => {
// console.log({ id, name, img, price });

  const dispatch = useDispatch();
  return (
    <div className='bg-slate-100 p-3 gap-1 flex w-76 h-20 rounded-lg mb-3 shadow-lg shadow-gray-400'>
      <img src={img} alt="error" className='rounded-full w-12 h-12 ' />
      <div className='flex flex-col justify-between items-center'>
        <div className='flex flex-1  justify-between items-center'>
          <p className="text-sm font-semibold ">{name.slice(0,20)}..</p>
         <MdDelete className='' onClick={() => dispatch(removeFromcart({id,name,img, price,qty}))}/>
        </div>
        <div className='flex flex-1 justify-between items-center  mt-1 '>
          <p className='text-yellow-300 font-semibold ml-[-16px] '>₹{price}</p>
          <div className='flex  gap-1 '>
            <HiMinusSm onClick={() => qty >= 1 ? dispatch( decreaseQty({id})) : (qty=0)} className="border-2 w-7 h-6  hover:text-yellow-400 hover:border-yellow-400 text-center rounded-md border-gray-400" />{qty}
            <IoIosAdd onClick={() =>  qty > 0 ? dispatch( increaseQty({id})) :  (qty=0)} className="border-2 w-7 h-6 hover:text-yellow-400 hover:border-yellow-400  text-center rounded-md border-gray-400" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default ItemCart