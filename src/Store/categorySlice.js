import { createSlice } from "@reduxjs/toolkit";

export const categorySlice= createSlice({
    name:"category",
    initialState:{
        category:{slug:"laptops",name:"Laptop"},
        categoryToogle:false
    },
    reducers:{
        setCategory:(state,action)=>{
            state.category=action.payload.category;
        },
        setCategoryToogle:(state,action)=>{
            state.categoryToogle=action.payload.categoryToogle;
        }
    }
})

export const{setCategory,setCategoryToogle}=categorySlice.actions;
export default categorySlice.reducer;