import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='bg-slate-100 flex flex-col justify-between h-full'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
