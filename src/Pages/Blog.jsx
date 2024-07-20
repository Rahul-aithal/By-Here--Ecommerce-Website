import React from 'react';
import { VStack, StackDivider, Box, Heading, Text, Image, Divider } from '@chakra-ui/react';

const blogPosts = [
  {
    id: 1,
    title: "The Journey of the Innovative Wireless Headphones",
    content: `
      In an era where superior sound quality is more important than ever, the Innovative Wireless Headphones have emerged as a revolutionary product. Designed by a dedicated team of audio engineers, these headphones offer an unmatched listening experience. With advanced noise-cancellation technology, users can fully immerse themselves in their music or podcasts without any external distractions. The headphones are crafted from premium materials, ensuring both durability and comfort. Their sleek design not only looks modern but is also engineered to fit comfortably for extended periods. Whether you're a music enthusiast or a casual listener, these headphones promise to deliver exceptional audio quality and a refined listening experience.
    `,
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 2,
    title: "The Evolution of the Sleek 4K Ultra HD Monitor",
    content: `
      The Sleek 4K Ultra HD Monitor represents a significant leap in display technology, designed to enhance every visual experience. It offers ultra-high-definition resolution that brings images and videos to life with remarkable clarity and detail. This monitor is not only about high resolution but also features vibrant color accuracy and a sleek, modern design that fits seamlessly into any workspace or home setup. The development of this monitor involved extensive research and innovation, focusing on delivering exceptional performance and aesthetic appeal. Ideal for professionals, gamers, and multimedia enthusiasts alike, it combines functionality with style, setting a new standard for display excellence.
    `,
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 3,
    title: "The Comfort Revolution: Ergonomic Gaming Chair",
    content: `
      The Ergonomic Gaming Chair is a game-changer in the world of comfort and design. Designed specifically for gamers, it addresses common issues such as poor posture and discomfort during long gaming sessions. The chair features adjustable lumbar support, a reclining backrest, and high-density foam cushioning to provide optimal comfort and support. Its ergonomic design helps maintain proper posture, reducing strain on the back and neck. Beyond functionality, the chair’s sleek design and customizable options make it a stylish addition to any gaming setup. With a focus on both comfort and aesthetics, this chair is designed to enhance your gaming experience significantly.
    `,
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 4,
    title: "Smart Home Security Camera: A New Standard in Safety",
    content: `
      The Smart Home Security Camera is designed to offer peace of mind and enhance home security. Featuring advanced motion detection and live streaming capabilities, this camera provides real-time monitoring of your home from anywhere. Its sleek, compact design allows it to blend seamlessly with any interior while maintaining high functionality. The camera integrates easily with smart home systems, offering features like remote access and alert notifications. Whether you’re at home or away, you can stay connected and informed about what’s happening around your property. With a focus on reliability and ease of use, this security camera sets a new benchmark for home safety.
    `,
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 5,
    title: "Compact Bluetooth Speaker: Portability Meets Performance",
    content: `
      The Compact Bluetooth Speaker combines portability with high-performance audio. Designed for those on the go, this speaker delivers powerful sound despite its small size. It features Bluetooth connectivity for easy pairing with devices, allowing you to enjoy your favorite music anywhere. Its durable design is built to withstand everyday use, and its compact form factor makes it easy to carry around. Ideal for outdoor activities, travel, or just moving from room to room, this speaker provides a versatile audio solution. With a focus on convenience and sound quality, it’s the perfect companion for music lovers who value both portability and performance.
    `,
    image: "https://via.placeholder.com/800x400",
  },
];

const ProductBlog = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={8}
      align="stretch"
      p={4}
      bg="gray.50"
      rounded="lg"
      shadow="md"
    >
      {blogPosts.map((post) => (
        <Box
          key={post.id}
          p={6}
          bg="white"
          rounded="lg"
          shadow="sm"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{ transform: 'scale(1.02)', shadow: 'lg' }}
        >
          <Image
            src={post.image}
            alt={post.title}
            borderRadius="md"
            mb={4}
          />
          <Heading size="lg" mb={4} color="blue.600">
            {post.title}
          </Heading>
          <Text fontSize="md" color="gray.700">
            {post.content}
          </Text>
          <Divider my={6} />
        </Box>
      ))}
    </VStack>
  );
};

export default ProductBlog;
