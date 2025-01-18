import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import categoryReducer from "./categorySlice";
import serachReducer from "./searchSlice";

export const store = configureStore({
    reducer: {
        cartData: cartReducer,
        categoryData: categoryReducer,
        searchData: serachReducer,
    }
})

