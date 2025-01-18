import { createSlice } from "@reduxjs/toolkit"

const initialState={
    category:"All",
}
const CategorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        setCategory:(state,action) =>{
            state.category= action.payload;
        }
    }
})

export const {setCategory} = CategorySlice.actions;
export default CategorySlice.reducer;