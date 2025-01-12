import React from 'react'
import Navbar from '../components/Navbar';
import CategoryMenu from '../components/CategoryMenu';
import FoodItem from '../components/FoodItem';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className='  bg-slate-100 relative'>
      <Navbar/>
     {/* <div className='flex flex-1 justify-between '>  */}
      <CategoryMenu/>
      <FoodItem/>
     <Cart/>
    {/* </div> */}
    </div>
  )
}

export default Home;