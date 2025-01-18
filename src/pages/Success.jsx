import React, { useEffect } from 'react'
import { useState } from 'react';
import PropagateLoader from "react-spinners";
function Success() {
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
setTimeout(() =>{
setLoading(false);
},3000);
  },[]);

  return (
  <div className='flex flex-col gap-0 justify-between items-center mt-80'>
      {loading ? (<PropagateLoader color="#36d7b7"/>
      ) : (
    <div>
     <h2 className='text-3xl font-semibold'>Order successfull!</h2>
      <p>Your order has been successfully placed</p> 
      </div>
   ) }
    </div>
  )
}

export default Success;