import ItemCard from '../Components/ItemCard';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryToogle } from '../Store/categorySlice';
import { useNavigate } from 'react-router-dom';
import blogPosts from '../../public/blogs';
import { Box, Button, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react';

function Home() {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='mx-2 h-full md:grid-cols-1 gap-3 relative'>
      <div className='relative my-2'>
        <h1 className='font-bold text-xl'>Bestseller</h1>
        <h2
          className='absolute right-0 top-0 mx-2 cursor-pointer text-black hover:text-blue-500'
          onClick={() => navigate("/all-items-page", { state: { bestSellers: true } })}
        >
          See more...
        </h2>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-2 place-items-center'>
          <ItemCard url={'https://dummyjson.com/products?limit=4&sortBy=rating&order=desc'} />
        </div>
      </div>

      <div className='relative my-3'>
        <h1 className='font-semibold'>
          Category:
          <button
            className='font-bold mx-2 hover:shadow-xl bg-gray-200 p-2 rounded'
            onClick={() => dispatch(setCategoryToogle({ categoryToogle: true }))}
          >
            {category.name}
          </button>
        </h1>
        <h2
          className='absolute right-0 top-0 mx-2 cursor-pointer text-black hover:text-blue-500'
          onClick={() => navigate("/all-items-page", { state: { bestSellers: false } })}
        >
          See more...
        </h2>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-2 place-items-center'>
          <ItemCard url={`https://dummyjson.com/products/category/${category.slug}?limit=4&sortBy=rating&order=desc`} />
        </div>
      </div>

      {/* Our Blogs starts */}
      <Box m="6">
      <Heading as="h1" size="lg" fontWeight="bold" mb="4">
        Our Blog
      </Heading>
      <Grid 
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} 
        gap={6}
      >
        {blogPosts.map((post) => (
          <Box
            key={post.id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{ transform: 'scale(1.02)', boxShadow: 'lg' }}
          >
            <Image
              src={post.image}
              alt={post.title}
              h="56"
              w="full"
              objectFit="fit"
            />
            <VStack align="start" p="4" spacing="3">
              <Heading as="h2" size="md" isTruncated>
                {post.title}
              </Heading>
              <Text color="gray.500" noOfLines={3}>
                {post.content}
              </Text>
              <Box display="flex" justifyContent="space-between" alignItems="center" w="full">
                <Button
                  colorScheme="blue"
                  variant="link"
                  onClick={() => navigate(`/blogs/${post.id}`)}
                >
                  Read More
                </Button>
              </Box>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
    
    </div >
  );
}

export default Home;
