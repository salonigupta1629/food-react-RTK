import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: ""
}
const SearchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearch:(state,action) => {
        state.search = action.payload;
    }
}})
export const {setSearch} = SearchSlice.actions;
export default SearchSlice.reducer;