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
  Stack,
  useBreakpointValue
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import useFetch from '../Hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItem } from '../Store/ItemSlice';


function SearchBar({ ref }) {
  const dispatch = useDispatch();

  const navigateTo = useNavigate();
  const [search, setSearch] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data, loading, error } = useFetch(`https://dummyjson.com/products/search?q=${search}`)
  const isLargeScreen = useBreakpointValue({ base: false, sm: false, md: true });
  return (
    <>

      <button
        className="flex items-center justify-start bg-gray-100 dark:bg-gray-800 md:px-4 md:py-2 rounded-full md:w-64 w-auto md:border md:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-50 md:focus:outline-none md:focus:ring-2   md:focus:ring-blue-400 focus:outline-none  transition-colors duration-200 ease-in-out"
        onClick={onOpen}
      >
        <FaSearch className="md:mr-2" />
      {isLargeScreen&&<span>Search</span>}
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
              className='flex items-center justify-start bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full w-full border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ease-in-out'
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
            {data.products && data.products.map((res, idx) => {
              return (
                <div key={res.id}
                  className="w-full h-8 px-3 bg-white dark:bg-gray-800   text-black dark:text-white font-medium cursor-pointer rounded-xl  hover:bg-gray-200 dark:hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ease-in-out border-red-300 my-2"
                  onClick={() => {
                    navigateTo('/item-page');
                    dispatch(setItem({ data: data.products[idx] }));
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