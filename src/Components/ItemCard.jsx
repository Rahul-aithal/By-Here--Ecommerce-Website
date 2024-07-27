import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {setItem} from '../Store/ItemSlice.js'
import useFetch from '../Hooks/useFetchData'

function ItemCard({url}) {
const navigateTo=useNavigate();
const dispatch=useDispatch()
const { data, loading, error } = useFetch(url);

const handleClick=function (data) {
    dispatch(setItem({data}));
    navigateTo("/item-page");

}

    return (<>
        {loading && <div>loading</div>}
        {error && <p>Something went wrong....</p>}
        {data.products &&data?.products&&data?.products.map((data)=>(
            <div key={data.id} onClick={()=>{handleClick(data)}}>
                <div  className='flex flex-col p-2 w-56 cursor-pointer'>
                    <button className='relative center rounded-3xl shadow-lg shadow-gray-500 bg-gray-50 dark:bg-gray-800 h-56 text-center'>
                        <span className='p-1 absolute left-6 top-2 transition-all ease-linear bg-white dark:bg-zinc-950 dark:text-white text-black rounded-full shadow-xl w-14 z-10'>{data.rating}</span>
                        {data.thumbnail ?
                            <img className='w-48 absolute top-5 right-2 transition-all ease-in fill-none'
                                src={data.thumbnail}
                                alt={data.title} /> :
                            <p className='text-black dark:text-whit'>
                                Loading images...
                            </p>
                        }
                    </button>
                    <button className='font-bold mt-2 dark:text-white'>{data.title}</button>
                    <p className='text-gray-400 h-12 overflow-hidden py-1'>{data.description}</p>
                    <p className='font-bold text-green-500'>${data.price} USD</p>
                </div>
            </div>))
        }
    </>)
}

export default ItemCard
