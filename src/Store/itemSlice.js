import { createSlice} from '@reduxjs/toolkit'


export const itemSlice = createSlice({
    name:"item",
    initialState:{
        data:null
    },
    reducers:{
        setItem:(state,action)=>{
            state.data=action.payload.data
        }
    }
});

export const{setItem}=itemSlice.actions
export default itemSlice.reducer