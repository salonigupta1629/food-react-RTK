import { createSlice } from "@reduxjs/toolkit"

const initialState= {
cart: []
}
const Slice = createSlice({
    name:"cartSlice",
initialState,
reducers:{
 addTocart:(state,action) =>{
    const existingItem = state.cart.find((item) => item.id === action.payload.id );                    
    if(existingItem){                                                                               
       state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty : item.qty + 1} : item);
    }else{
        state.cart.push(action.payload);
    }
},
removeFromcart:(state,action) =>{
    const data= state.cart.filter((item) =>(
item.id !==action.payload.id
    ))
    state.cart=data;
},
increaseQty:(state,action) =>{
state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty : item.qty + 1} : item);
},
decreaseQty:(state,action) =>{
    state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty : item.qty - 1} : item);
    },
}
})
export const {addTocart,removeFromcart, increaseQty , decreaseQty} = Slice.actions;
export default Slice.reducer;