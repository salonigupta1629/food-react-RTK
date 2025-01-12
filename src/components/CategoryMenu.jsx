import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mt-12 gap-4 p-3 '>
        <h2 className='font-bold text-xl'>Find the best food</h2>
        <div className='mt-6'>
            <button className='px-3 py-2 bg-yellow-500 hover:bg-black hover:text-white  rounded-lg font-semibold mr-6 '>All</button>
            <button className='px-3 py-2 bg-yellow-500 hover:bg-black hover:text-white  rounded-lg font-semibold mr-6' >Lunch</button>
            <button className='px-3 py-2 bg-yellow-500 hover:bg-black hover:text-white  rounded-lg font-semibold mr-6'>Breakfast</button>
            <button className='px-3 py-2 bg-yellow-500 hover:bg-black hover:text-white  rounded-lg font-semibold mr-6'>Dinner</button>
            <button className='px-3 py-2 bg-yellow-500 hover:bg-black hover:text-white  rounded-lg font-semibold mr-6'>Snacks</button>
        </div>
    </div>
  )
}

export default CategoryMenu