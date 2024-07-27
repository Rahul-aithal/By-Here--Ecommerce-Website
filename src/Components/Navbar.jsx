import React from 'react';
import SearchBar from './SearchBar';
import { NavLink, Link } from 'react-router-dom';
import {  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import useFetch from '../Hooks/useFetchData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setCategoryToogle } from '../Store/categorySlice';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading, error } = useFetch('https://dummyjson.com/products/categories');
  const dispatch = useDispatch();
  const categoryToogle = useSelector((state) => state.category.categoryToogle);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching categories</p>;

  return (
    <nav className="bg-transparent grid grid-cols-3 place-items-center h-full w-full md:min-h-14 md:max-h-16 max-h-12 sticky top-0 z-20 px-3 backdrop-blur-xl">
      <div className="flex gap-4 w-full col-start-1 items-center justify-start">
        <button 
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
          onClick={onOpen}
          aria-label="Open menu"
        >
          <GiHamburgerMenu />
        </button>
        <Link to="/" className="font-bold md:text-xl text-xs">
         <span className='dark:text-white'>Buy</span> <span className="text-red-500">Here</span>
        </Link>
      </div>
      <SearchBar />
      <ul className="flex md:gap-4 gap-2 text-xs md:text-xl">
        <NavLink 
          to="/cart" 
          className={({ isActive }) => `${isActive ? "text-black dark:text-white" : "text-gray-400"} cursor-pointer hover:text-black dark:hover:text-white font-bold`}
        >
          Cart
        </NavLink>
        <NavLink 
          to="/all-items-page" 
          className={({ isActive }) => `${isActive ? "text-black dark:text-white" : "text-gray-400"} cursor-pointer hover:text-black dark:hover:text-white font-bold`}
        >
          Store
        </NavLink>
        <NavLink 
          to="/support" 
          className={({ isActive }) => `${isActive ? "text-black dark:text-white" : "text-gray-400"} cursor-pointer hover:text-black dark:hover:text-white font-bold`}
        >
          Support
        </NavLink>
      </ul>
      <Drawer 
        placement="left" 
        onClose={onClose} 
        isOpen={isOpen || categoryToogle}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-white dark:bg-black text-black dark:text-white">
          <DrawerCloseButton 
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            onClick={() => dispatch(setCategoryToogle({ categoryToggle: false }))}
          />
          <DrawerHeader borderBottomWidth="1px">Categories</DrawerHeader>
          <DrawerBody>
            {data.length > 0 ? (
              data.map((category, idx) => (
                <button
                  key={idx}
                  className="block w-full md:text-xl border-2 rounded-xl p-2 mb-2 cursor-pointer bg-white dark:bg-gray-700  text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                  onClick={() => {
                    dispatch(setCategory({ category }));
                    dispatch(setCategoryToogle({ categoryToggle: false }));
                    onClose();
                  }}
                >
                  {category.name}
                </button>
              ))
            ) : (
              <p className="text-center">No categories available</p>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}

export default Navbar;
