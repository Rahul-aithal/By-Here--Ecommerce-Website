import ItemCard from '../Components/ItemCard';
import React from 'react'
import useFetch from '../Hooks/useFetchData'
import { useDispatch, useSelector } from 'react-redux';
import {setCategoryToogle} from '../Store/categorySlice'

function Home() {

  // const { data, loading, error } = useFetch('https://dummyjson.com/products/categories');
  // console.log(data);
  const categorey=useSelector((state)=>(state.category.category));
  console.log(categorey);
const dispatch = useDispatch();
  return (
    <div className='mx-2 h-full md:grid-cols-1 gap-3' >

      <h1 className='font-bold text-xl'>Bestseller</h1>
      <div className='grid md:grid-cols-4 grid-cols-1  gap-2 place-items-center'>

        <ItemCard url={'https://dummyjson.com/products?limit=4&sortBy=rating&order=desc'} />
      
      </div>

      <h1 className='font-semibold '>Catgorey:
         <span className='font-bold mx-2 cursor-pointer' onClick={()=>{
          dispatch(setCategoryToogle({categoryToogle:true}))}}>
      {categorey.name}
        </span> </h1>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-2 place-items-center'>
        <ItemCard url={`https://dummyjson.com/products/category/${categorey.slug}?limit=4&sortBy=rating&order=desc`} />
      
      </div>
    </div>
  )
}

export default Home