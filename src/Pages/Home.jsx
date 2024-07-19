import React from 'react'
import useFetch from '../Hooks/useFetchData'
import ItemCard from '../Components/ItemCard';

function Home() {

  const { data, loading, error } = useFetch('https://dummyjson.com/products?limit=4&sortBy=rating&order=desc');
  console.log(data);
  return (
    <div className='mx-2 h-[100vh]'>

      <h1 className='font-bold text-xl'>Bestseller</h1>
      <div className='grid grid-cols-4 gap-2 place-items-center'>
      {loading&&<ItemCard loading={loading}/>}
      {error&&<ItemCard error={error} />}
      {data?.products&&data?.products.map((item)=>(
        <ItemCard data={item} />
      )) }
      </div>
    </div>
  )
}

export default Home