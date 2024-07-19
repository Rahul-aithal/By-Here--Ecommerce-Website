import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Box, Image, Text, Badge, Stack, VStack, HStack, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalHeader,
  useDisclosure,
  ModalCloseButton
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function ItemPage() {
const [more, setMore] = useState(true);
const [extend, setExtend] = useState(false);

  const item = useSelector((state) => state.item.data)
  console.log(item);
  const { isOpen, onOpen, onClose } = useDisclosure()
const navigate=useNavigate()
  return (
    <Box maxW="xl" mx="auto" my="8" p="6" borderWidth="1px" borderRadius="lg" shadow="lg" className="bg-white">
      <VStack spacing={4} align="stretch">
        <Button boxSize="100%" onClick={item.images?.length>0&&onOpen}>

          <Image boxSize="100%" objectFit="cover" src={item.images?.length>0?item.images[0]:"#"} alt={item.title} borderRadius="md" />
          <Modal
            onClose={onClose}
            isOpen={isOpen}
            size="xl"
          > <ModalOverlay />
            <ModalContent>
            <ModalCloseButton />
              <ModalBody>
              <Image boxSize="100vh"  objectFit="cover" src={item.images[0]} alt={item.title} borderRadius="md" />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Button>

        <Text fontSize="2xl" fontWeight="bold">
          {item.title}
        </Text>

        <Text color="gray.600">{item.description}...
          {more&&<span className='hover:underline cursor-pointer hover:text-blue-700' 
          onClick={()=>{
            setMore(false)
            setExtend(true)
          }}>more</span>
          }
          {
         extend && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="md" bg="gray.50">
            <Text fontWeight="bold" color="blue.500">Weight:</Text>
            <Text>{item.weight} kg</Text>

            <Text fontWeight="bold" color="blue.500" mt={2}>Dimensions:</Text>
            <Text>
              {item.dimensions?.width} x {item.dimensions?.height} x {item.dimensions?.depth} cm
            </Text>

            <Text fontWeight="bold" color="blue.500" mt={2}>Warranty:</Text>
            <Text>{item.warrantyInformation}</Text>

            <Text fontWeight="bold" color="blue.500" mt={2}>Shipping Information:</Text>
            <Text>{item.shippingInformation}</Text>

            <Text fontWeight="bold" color="blue.500" mt={2}>Availability Status:</Text>
            <Text color={item.availabilityStatus === 'Low Stock' ? 'orange.500' : 'green.500'}>
              {item.availabilityStatus}
            </Text>

            <Text fontWeight="bold" color="blue.500" mt={2}>Minimum Order Quantity:</Text>
            <Text>{item.minimumOrderQuantity}</Text>

            <Text fontWeight="bold" color="blue.500" mt={2}>Barcode:</Text>
            <Text>{item.meta?.barcode}</Text>

            <Text fontWeight="bold" color="blue.500" mt={2}>QR Code:</Text>
            <Image src={item.meta?.qrCode} alt="QR Code" boxSize="100px" mt={2} />
          </Box>
        )}


        </Text>

        <HStack spacing={4}>
          <Badge colorScheme="purple">{item.category}</Badge>
          <Badge colorScheme="green">{item.brand}</Badge>
        </HStack>

        <Text fontSize="xl" fontWeight="bold" className="text-blue-600">
          ${item.price.toFixed(2)}
        </Text>

        <Text color="gray.600">Discount: {item.discountPercentage}%</Text>

        <Text color={item.stock > 0 ? "green.500" : "red.500"} fontWeight="bold">
          {item.availabilityStatus}
        </Text>

        <Stack direction="column" spacing={2} mt={4}>
          {item.reviews.map((review, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" className="bg-gray-100">
              <Text fontWeight="bold">
                {review.reviewerName} - {review.rating}⭐
              </Text>
              <Text color="gray.600">{review.comment}</Text>
            </Box>
          ))}
        </Stack>

        <Button colorScheme="teal" size="lg" onClick={()=>{ navigate('/cart', { state: { item:item,add:true } });}}>
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
};




export default ItemPage
