import { configureStore } from '@reduxjs/toolkit'
import itemSlice  from './ItemSlice'
import categorySlice from './categorySlice'
import  themeSlice  from './ThemeSlice'

const store = configureStore({
  reducer: {
    item: itemSlice,
    category:categorySlice,
    theme:themeSlice,
  },
})  


export default store