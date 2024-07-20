import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='bg-slate-100 min-h-[100dvh] grid grid-rows-[auto_1fr_auto] '>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
