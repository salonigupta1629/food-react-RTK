import React from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { removeFromcart } from '../redux/cartSlice';

const ItemCart = ({ id, name, img, price,qty }) => {
// console.log({ id, name, img, price });


  const dispatch = useDispatch();
  return (
    <div className='bg-slate-100 p-3 gap-3 flex w-76 h-20 rounded-lg mb-3 shadow-lg shadow-gray-400'>
      <img src={img} alt="error" className='rounded-full w-12 h-12 ' />
      <span className='flex flex-col justify-between items-center'>
        <div className='flex flex-1  justify-between items-center'>
          <p className="text-sm font-semibold">{name}</p>
          <div className=" " onClick={() => dispatch(removeFromcart(id))}> <MdDelete /></div>
        </div>
        <div className='flex flex-1 justify-between items-center mt-1'>
          <p className='text-yellow-300 font-semibold'>₹{price}</p>
          <span className='flex gap-1'>
            < FiMinus className="border-2 w-7 h-6  hover:text-yellow-400 hover:border-yellow-400 text-center rounded-md border-gray-400" />{qty}
            <IoIosAdd className="border-2 w-7 h-6 hover:text-yellow-400 hover:border-yellow-400  text-center rounded-md border-gray-400" />
          </span>
        </div>
      </span>
    </div>

  )
}

export default ItemCart