import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalHeader,
  useDisclosure,
  Button,
  Skeleton,
  Stack
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import useFetch from '../Hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItem } from '../Store/itemSlice';


function SearchBar({ ref }) {
  const dispatch = useDispatch();
  
  const navigateTo=useNavigate();
  const [search, setSearch] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data, loading, error } = useFetch(`https://dummyjson.com/products/search?q=${search}`)

  return (
    <>

      <button
        className="flex items-center justify-start bg-gray-100 px-4 py-2 rounded-full w-64 border border-gray-300 hover:bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ease-in-out"
        onClick={onOpen}
      >
        <FaSearch className="mr-2" />
        <span>Search</span>
      </button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        finalFocusRef={ref}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
             <input type="text"
            placeholder='Search'
            className='flex items-center justify-start bg-gray-100 px-4 py-2 rounded-full w-full border border-gray-300 hover:bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ease-in-out'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              
            }}
          /></ModalHeader>
          <ModalBody>
            {
              loading && <Stack spacing={4}>
                <Skeleton height="20px" startColor="gray.300" endColor="gray.400" />
                <Skeleton height="20px" startColor="gray.300" endColor="gray.400" />
                <Skeleton height="20px" startColor="gray.300" endColor="gray.400" />
              </Stack>

            }
            {
              error && <p>Something went wrong</p>
            }
            {data.products && data.products.map((res,idx) => {
              return (
                <div key={res.id}
                  className="w-full h-8 px-3 text-black font-medium cursor-pointer rounded-xl bg-white  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ease-in-out"
onClick={()=>{
  navigateTo('/item');
  dispatch(setItem({data:data.products[idx]}));
  onClose()
}}
                >
                  {res.title}
                </div>)
            })}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  )
}

export default SearchBar