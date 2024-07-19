import React from 'react';
import SearchBar from './SearchBar';
import { NavLink, Link } from 'react-router-dom';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import useFetch from '../Hooks/useFetchData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setCategoryToogle } from '../Store/categorySlice';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading, error } = useFetch('https://dummyjson.com/products/categories');
  const dispatch = useDispatch();
  const categoryToogle = useSelector((state) => state.category.categoryToogle);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching categories</p>;

  return (
    <nav className="bg-slate-50 grid grid-cols-3 place-items-center h-full w-full md:min-h-14 md:max-h-16 max-h-12 sticky top-0 z-20 px-3">
      <div className="flex gap-4 w-full col-start-1 items-center justify-start">
        <Button colorScheme="blackAlpha" onClick={onOpen} aria-label="Open menu">
          <GiHamburgerMenu />
        </Button>
        <Link to="/" className="font-bold md:text-xl text-xs">
          Buy<span className="text-red-500">Here</span>
        </Link>
      </div>
      <SearchBar />
      <ul className="flex md:gap-4 gap-2 text-xs md:text-xl">
        <NavLink to="/cart" className={({ isActive }) => `${isActive ? "text-black" : "text-gray-400"} cursor-pointer hover:text-black font-bold`}>
          Cart
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-black" : "text-gray-400"} cursor-pointer hover:text-black font-bold`}>
          About
        </NavLink>
        <NavLink to="/support" className={({ isActive }) => `${isActive ? "text-black" : "text-gray-400"} cursor-pointer hover:text-black font-bold`}>
          Support
        </NavLink>
      </ul>
      <Drawer colorScheme="gray" placement="left" onClose={onClose} isOpen={isOpen || categoryToogle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Categories</DrawerHeader>
          <DrawerBody>
            {data.length > 0 ? (
              data.map((category) => (
                <Button
                  key={category.name}
                  className="p-2 mb-1 w-full md:text-xl bg-white border-2 rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    dispatch(setCategory(category));
                    dispatch(setCategoryToogle({ categoryToggle: false }));
                    onClose();
                  }}
                >
                  {category.name}
                </Button>
              ))
            ) : (
              <p>No categories available</p>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}

export default Navbar;
