import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/foodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItem = () => {
  const category = useSelector((state) => state.categoryData.category);
  const search = useSelector((state) => state.searchData.search);
  const handleToast = ((name) =>{
    toast.success(`Added ${name}`);
  });

  return (
  <>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='mt-8 flex flex-1 flex-wrap gap-8 justify-around '>
      {
       FoodData.filter((food)=>{
        if(category === "All"){
return food.name.toLowerCase().includes(search.toLowerCase());
        }else{
          return (
            category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
          );
        }
       }).map((food) => (
        <FoodCard key={food.id} 
        id={food.id} 
        name={food.name}
         img={food.img}
          price={food.price} 
          desc={food.desc}
           rating={food.rating} 
           handleToast={handleToast}
            /> 

      ))
      }
    </div>
  </>
  );
};

export default FoodItem;