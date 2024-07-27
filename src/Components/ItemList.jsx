import React from 'react'

function ItemList({data}) {
  return (
   data.map((item)=>{
    <div>
    <img src={item.thumbnail} alt={item.title}/>
  </div>
   })
  
  )
}

export default ItemList
