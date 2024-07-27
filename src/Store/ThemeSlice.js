import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name:"theme",
    initialState:{
        dark:false  ,
    },
    reducers:{
        changeTheme:(state)=>{
            state.dark=!state.dark
        }
    }
})

export const {changeTheme}=themeSlice.actions
export default themeSlice.reducer