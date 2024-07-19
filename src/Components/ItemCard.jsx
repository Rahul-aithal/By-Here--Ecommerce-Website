import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {setItem} from '../Store/itemSlice.js'

function ItemCard({ data = "", loading = "", error = "" }) {
const navigateTo=useNavigate();
const dispatch=useDispatch()

const handleClick=function () {
    dispatch(setItem({data}));
    navigateTo("/item");

}

    return (<>
        {loading && <div>loading</div>}
        {error && <p>Something went wrong....</p>}
        {data && (
            <div key={data.id} onClick={handleClick}>
                <div  className='flex flex-col p-2 w-56 '>
                    <button className='relative center rounded-3xl shadow-lg bg-gray-50 h-56 text-center'>
                        <span className='p-1 absolute left-6 top-2 transition-all ease-linear bg-white rounded-full shadow-xl w-14 z-10'>{data.rating}</span>
                        {data.thumbnail ?
                            <img className='w-48 absolute top-5 right-2 transition-all ease-in'
                                src={data.thumbnail}
                                alt={data.title} /> :
                            <p className='text-black'>
                                Loading images...
                            </p>
                        }
                    </button>
                    <button className='font-bold mt-2'>{data.title}</button>
                    <p className='text-gray-400 h-12 overflow-hidden py-1'>{data.description}</p>
                    <p className='font-bold'>${data.price} USD</p>
                </div>
            </div>)
        }
    </>)
}

export default ItemCard
