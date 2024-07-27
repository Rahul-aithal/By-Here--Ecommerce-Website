import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useSelector } from 'react-redux'

function App() {
  const isDark = useSelector((state)=>(state.theme.dark));
  

useEffect(() => {
const html=document.querySelector("html");
html.classList.remove("dark","light");
html.classList.add(isDark?"dark":"light");

}, [isDark])
  
  return (
    <div className='bg-slate-100 dark:bg-slate-950 min-h-[100dvh] grid grid-rows-[auto_1fr_auto] '>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
