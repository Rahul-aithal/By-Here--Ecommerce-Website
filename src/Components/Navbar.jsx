import React from 'react'
import SearchBar from './SearchBar'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    const navRef = React.useRef(null);
    return (
        <nav ref={navRef} className='bg-slate-50 flex items-center justify-around h-full w-full min-h-14 max-h-16'>
            <Link to="/" className='font-bold '>
                Buy<span className='text-red-500'>Here</span>
            </Link>
            <SearchBar ref={navRef}/>
            <ul className='flex gap-4'>
                <NavLink to={"/cart"} 
               className={({isActive}) =>  `${isActive? "text-black":"text-gray-400"} cursor-pointer  hover:text-black  font-bold` }>
                    Cart</NavLink>
                <NavLink to="/about"
                 className={({isActive}) =>  `${isActive? "text-black":"text-gray-400"} cursor-pointer  hover:text-black  font-bold` }
                 >About</NavLink>
                <NavLink to="/support"
                 className={({isActive}) =>  `${isActive? "text-black":"text-gray-400"} cursor-pointer  hover:text-black  font-bold` }
                 >Support</NavLink>
            </ul>

        </nav>
    )
}

export default Navbar