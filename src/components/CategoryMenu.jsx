import React, { useState } from 'react';
import FoodData from '../data/foodData'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/categorySlice';
import { useEffect } from 'react';

const CategoryMenu = () => {
  const[categories,setCategories] = useState([]);

  const listUniqueCategories = () =>{
const uniqueCategories = [
  ...new Set(FoodData.map((food) => food.category))
];
  setCategories(uniqueCategories);
  console.log(uniqueCategories);
  };

  useEffect(() =>{
listUniqueCategories();
  },[]);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categoryData.category);

  return (
    <div className='mt-12 gap-4 p-3 '>
        <h2 className='font-bold text-xl'>Find the best food</h2>
        <div className='mt-6'>
          <button onClick={() => dispatch(setCategory("All"))} 
          className={`px-3 py-2 bg-yellow-500 hover:bg-black hover:text-white  rounded-lg font-semibold mr-6 ${selectedCategory === "All" && "bg-yellow-700 text-gray-100"}`}>All</button>
          {
           categories.map((category,index) => {
         return(
           <button onClick={() => dispatch(setCategory(category))} key={index} className={`px-3 py-2 bg-yellow-500 hover:bg-black hover:text-white  rounded-lg font-semibold mr-6
             ${selectedCategory === category && "bg-yellow-700 text-gray-100"}`}>{category}</button>
         )
           }) 
          }
        </div>
    </div>
  )
}

export default CategoryMenu