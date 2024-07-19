import { configureStore } from '@reduxjs/toolkit'
import itemSlice  from './ItemSlice'
import categorySlice from './categorySlice'

const store = configureStore({
  reducer: {
    item: itemSlice,
    category:categorySlice,
  },
})  


export default store