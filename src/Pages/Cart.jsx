import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Button,
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  VStack,
  Text,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const location = useLocation();
  const item = location.state.item || {};
  const add = location.state.add || false;

  useEffect(() => {
    setCartProducts((prevCartProducts) => {
      const existingProductIndex = prevCartProducts.findIndex((prod) => prod.id === item.id);

      if (existingProductIndex !== -1) {
        const updatedCartProducts = [...prevCartProducts];
        updatedCartProducts[existingProductIndex] = {
          ...updatedCartProducts[existingProductIndex],
          quantity: updatedCartProducts[existingProductIndex].quantity + 1,
        };
        return updatedCartProducts;
      } else {
        return [
          ...prevCartProducts,
          { ...item, quantity: item.minimumOrderQuantity },
        ];
      }
    });
  }, [item]);

  const handleRemoveFromCart = (id) => {
    setCartProducts((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== id));
  };

  return (
    cartProducts.length > 0 ? (
      cartProducts.map((item) => (
        <VStack
          key={item.id}
          divider={<StackDivider borderColor="gray.200" />}
          spacing={6}
          align="stretch"
          p={4}
          bg="gray.50"
          rounded="lg"
          shadow="md"
        >
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            bg="white"
            shadow="sm"
            rounded="lg"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: 'scale(1.02)',
              shadow: 'lg',
            }}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              w="full"
              h="auto"
              src={item.thumbnail}
              alt={item.title}
            />

            <Stack flex="1" p={4}>
              <CardBody>
                <Heading size="md" mb={2} color="blue.600">
                  {item.title}
                </Heading>

                <Text py={2} fontSize="sm" color="gray.700">
                  {item.description || 'Description not available'}
                </Text>

                <Box mt={4}>
                  <Text fontWeight="bold" color="blue.500">
                    Price: ${item.price?.toFixed(2) || 'N/A'}
                  </Text>
                  <Text fontWeight="bold" color={item.rating > 3.8 ? "green.500" : item.rating > 2.5 ? "yellow.500" : "red.500"}>
                    Rating: {item.rating?.toFixed(1) || 'No rating'}
                  </Text>
                  <Text fontWeight="bold" color={item.stock > 0 ? 'green.500' : 'red.500'}>
                    Stock: {item.stock > 0 ? `${item.stock} available` : 'Out of stock'}
                  </Text>
                  <Text fontWeight="bold" color="teal.600">
                    Shipment: {item.shippingInformation || 'Not available'}
                  </Text>
                  <NumberInput
                    size="sm"
                    maxW={20}
                    defaultValue={item.quantity || item.minimumOrderQuantity}
                    min={item.minimumOrderQuantity}
                    max={item.stock > 0 ? Math.round(item.stock / 2) - item.minimumOrderQuantity * 2 : item.minimumOrderQuantity}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  size="sm"
                  borderRadius="full"
                  isDisabled={item.stock === 0}
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  {item.stock > 0 ? 'Buy Now' : 'Out of Stock'}
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </VStack>
      ))
    ) : (
      <Text p={4} textAlign="center" color="gray.600">
        Your cart is empty.
      </Text>
    )
  );
}

export default Cart;
