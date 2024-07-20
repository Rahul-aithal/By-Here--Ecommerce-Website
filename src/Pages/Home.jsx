import ItemCard from '../Components/ItemCard';
import React from 'react'
import useFetch from '../Hooks/useFetchData'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryToogle } from '../Store/categorySlice'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Home() {

  // const { data, loading, error } = useFetch('https://dummyjson.com/products/categories');
  // console.log(data);
  const categorey = useSelector((state) => (state.category.category));
  console.log(categorey);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  return (
    <div className='mx-2 h-full md:grid-cols-1 gap-3 relative' >
      <div className='relative my-2'>

        <h1 className='font-bold text-xl'>Bestseller</h1>
        <h2 className='absolute right-0 top-0 mx-2 cursor-pointer text-black hover:text-blue-500' onClick={()=>{navigate("/ALLItemPage", { state: { bestSellers:true} })}}>See more...</h2>
        <div className='grid md:grid-cols-4 grid-cols-1  gap-2 place-items-center'>

          <ItemCard url={'https://dummyjson.com/products?limit=4&sortBy=rating&order=desc'} />

        </div>
      </div>
      <div className='relative my-3'>
        <h1 className='font-semibold '>Catgorey:
        <Button color="black" colorScheme='grey' variant={"solid"} className='font-bold mx-2    hover:shadow-xl' onClick={() => {
            dispatch(setCategoryToogle({ categoryToogle: true }))
          }}>
            {categorey.name}
          </Button> </h1>
          <h2 className='absolute right-0 top-0 mx-2 cursor-pointer text-black hover:text-blue-500' >See more...</h2>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-2 place-items-center'>
          <ItemCard url={`https://dummyjson.com/products/category/${categorey.slug}?limit=4&sortBy=rating&order=desc`} />
        </div>
      </div>
    </div>
  )
}

export default Home