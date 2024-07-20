import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Image,
  Text,
  Badge,
  VStack,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  CloseButton,
  Stack,
  useBreakpointValue,
  IconButton
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function ItemPage() {
  const [more, setMore] = useState(true);
  const [extend, setExtend] = useState(false);

  const item = useSelector((state) => state.item?.data) || {};
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const isLargeScreen = useBreakpointValue({ base: false, sm: false, md: true });

  return (
    <Box
      maxW="container.md"
      mx="auto"
      my="8"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      shadow="lg"
      bg="white"
    >
      <VStack spacing={4} align="stretch">
        <Box position="relative" w="full">
          <Button boxSize="full" onClick={item.images?.length > 0 ? onOpen : undefined} variant="outline">
            <Image
              boxSize="full"
              objectFit="cover"
              src={item.images?.length > 0 ? item.images[0] : "https://via.placeholder.com/150"}
              alt={item.title || "No image available"}
              borderRadius="md"
            />
          </Button>

          {isLargeScreen && (
            <Modal onClose={onClose} isOpen={isOpen} size="3xl">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <Image
                    boxSize="100vh"
                    objectFit="cover"
                    src={item.images?.length > 0 ? item.images[0] : "https://via.placeholder.com/150"}
                    alt={item.title || "No image available"}
                    borderRadius="md"
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          )}

          {!isLargeScreen && (
            <Modal onClose={onClose} isOpen={isOpen} size="md">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <Text>No larger image available on small screens</Text>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </Box>

        <Text fontSize="2xl" fontWeight="bold">
          {item.title || "Item Title"}
        </Text>

        <Text color="gray.600">
          {item.description || "No description available"}
          {more && (
            <>
              ...
              <Text
                as="span"
                className="hover:underline cursor-pointer text-blue-500 hover:text-red-500"
                onClick={() => {
                  setMore(false);
                  setExtend(true);
                }}
              >
                more
              </Text>
            </>
          )}
          {extend && (
            <Box mt={4} p={4} borderWidth="1px" borderRadius="md" bg="gray.50" position="relative">
              <CloseButton
                position="absolute"
                right={2}
                top={2}
                onClick={() => {
                  setExtend(!extend);
                  setMore(!more);
                }}
              />
              <Text fontWeight="bold" color="blue.500">
                Weight:
              </Text>
              <Text>{item.weight || "N/A"} kg</Text>

              <Text fontWeight="bold" color="blue.500" mt={2}>
                Dimensions:
              </Text>
              <Text>
                {item.dimensions?.width || "N/A"} x {item.dimensions?.height || "N/A"} x{" "}
                {item.dimensions?.depth || "N/A"} cm
              </Text>

              <Text fontWeight="bold" color="blue.500" mt={2}>
                Warranty:
              </Text>
              <Text>{item.warrantyInformation || "N/A"}</Text>

              <Text fontWeight="bold" color="blue.500" mt={2}>
                Shipping Information:
              </Text>
              <Text>{item.shippingInformation || "N/A"}</Text>

              <Text fontWeight="bold" color="blue.500" mt={2}>
                Availability Status:
              </Text>
              <Text
                color={item.availabilityStatus === "Low Stock" ? "orange.500" : "green.500"}
              >
                {item.availabilityStatus || "N/A"}
              </Text>

              <Text fontWeight="bold" color="blue.500" mt={2}>
                Minimum Order Quantity:
              </Text>
              <Text>{item.minimumOrderQuantity || "N/A"}</Text>

              <Text fontWeight="bold" color="blue.500" mt={2}>
                Barcode:
              </Text>
              <Text>{item.meta?.barcode || "N/A"}</Text>

              <Text fontWeight="bold" color="blue.500" mt={2}>
                QR Code:
              </Text>
              <Image
                src={item.meta?.qrCode || "https://via.placeholder.com/100"}
                alt="QR Code"
                boxSize="100px"
                mt={2}
              />
            </Box>
          )}
        </Text>

        <HStack spacing={4}>
          <Badge colorScheme="purple">{item.category || "N/A"}</Badge>
          <Badge colorScheme="green">{item.brand || "N/A"}</Badge>
        </HStack>

        <Text fontSize="xl" fontWeight="bold" color="blue.600">
          ${item.price?.toFixed(2) || "0.00"}
        </Text>

        <Text color="gray.600">Discount: {item.discountPercentage || 0}%</Text>

        <Text color={item.stock > 0 ? "green.500" : "red.500"} fontWeight="bold">
          {item.stock > 0 ? "In Stock" : "Out of Stock"}
        </Text>

        <Stack direction="column" spacing={2} mt={4}>
          {item.reviews?.length > 0 ? (
            item.reviews.map((review, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" bg="gray.100">
                <Text fontWeight="bold">
                  {review.reviewerName || "Anonymous"} - {review.rating || 0}⭐
                </Text>
                <Text color="gray.600">{review.comment || "No comment"}</Text>
              </Box>
            ))
          ) : (
            <Text>No reviews available</Text>
          )}
        </Stack>

        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => {
            navigate('/cart', { state: { item: item, add: true } });
          }}
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
}

export default ItemPage;
