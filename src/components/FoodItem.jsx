import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/foodData'

const FoodItem = () => {
  return (
    <div className='mt-8 flex flex-1 flex-wrap gap-8 justify-around'>
    {
      FoodData.map((food,index) =>(
    <FoodCard key={index} name={food.name}  img={food.img} price={food.price} desc={food.desc} rating={food.rating}/>

      ))
    }
    </div>
  )
}

export default FoodItem;