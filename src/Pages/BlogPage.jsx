import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';
import blogPosts from '../../public/blogs'; // Ensure this path is correct

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id, 10));

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <Box p="6">
      <Image
        src={post.image}
        alt={post.title}
        h="400px"
        w="full"
        objectFit="contain"
        mb="4"
      />
      <Heading as="h1" size="xl" mb="4" className='dark:text-white' >
        {post.title}
      </Heading>
      <Text fontSize="lg" mb="4" className='dark:text-white'>
        {post.content}
      </Text>
      <Button colorScheme="blue" onClick={() => window.history.back()}>
        Go Back
      </Button>
    </Box>
  );
}

export default BlogDetail;
