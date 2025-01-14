import { createSlice } from "@reduxjs/toolkit"

const initialState= {
cart: []
}
const Slice = createSlice({
    name:"cartSlice",
initialState,
reducers:{
 addTocart:(state,action) =>{
const data =  action.payload;
state.cart.push(data);
},
removeFromcart:(state,action) =>{
    const data= state.cart.filter((item) =>(
item.id !==action.payload.id
    ))
    state.cart=data;
}
}
})
export const {addTocart,removeFromcart} = Slice.actions;
export default Slice.reducer;