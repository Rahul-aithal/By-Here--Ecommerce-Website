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
  const item = location.state?.item || {};
  const add = location.state?.add || false;
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  // Initialize cart products from session storage
  useEffect(() => {
    try {
      const storedCart = sessionStorage.getItem('cartProducts');
      if (storedCart) {
        setCartProducts(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Failed to parse cartProducts from sessionStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      const storedPurchased = sessionStorage.getItem('purchasedProducts');
      if (storedPurchased) {
        setCartProducts(JSON.parse(storedPurchased));
      }
    } catch (error) {
      console.error('Failed to parse cartProducts from sessionStorage:', error);
    }
  }, []);

  // Update session storage whenever cartProducts changes
  useEffect(() => {
    if (cartProducts.length > 0) {
      sessionStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProducts.map((cartItem) => ({
          ...cartItem, // Copy all properties of the cart item
        })))
      );
    }
  }, [cartProducts]);

  useEffect(() => {
    if (purchasedProducts.length > 0) {
      sessionStorage.setItem(
        'purchasedProducts',
        JSON.stringify(purchasedProducts.map((purchasedItem) => ({
          ...purchasedItem, // Copy all properties of the purchased item
        })))
      );
    }
  }, [purchasedProducts]);


  // Handle adding item to cart
  useEffect(() => {
    if (add && item.id) {
      setCartProducts((prevCartProducts) => {
        const existingProductIndex = prevCartProducts.findIndex(
          (prod) => prod.id === item.id
        );

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
    }
  }, [add, item]);

  const handleRemoveFromCart = (id) => {
    setCartProducts((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== id)
    );
  };
  const handleBuyNow = (purchasedCartItem) => {

    setPurchasedProducts([...purchasedProducts, purchasedCartItem])
    setCartProducts((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== purchasedCartItem.id)
    );
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  };

  return cartProducts.length > 0 ? (
    cartProducts.map((cartItem) => (
      <VStack
        key={cartItem.id}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={6}
        align="stretch"
        p={4}
        sx={{

          bg: "gray.50",
          _dark: {
            bg: "gray.700"
          }
        }}
        rounded="lg"
        shadow="md"
      >
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          sx={

            {
              bg: "white",
              _dark: {
                bg: "gray.900"
              }
            }

          }
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
            src={cartItem.thumbnail}
            alt={cartItem.title}
          />

          <Stack flex="1" p={4}>
            <CardBody>
              <Heading size="md" mb={2} color="blue.600">
                {cartItem.title}
              </Heading>

              <Text py={2} fontSize="sm" sx={{
                color: "gray.700", _dark: {
                  color: "gray.200"
                }
              }}>
                {cartItem.description || 'Description not available'}
              </Text>

              <Box mt={4}>
                <Text fontWeight="bold" color="blue.500">
                  Price: ${cartItem.price?.toFixed(2) || 'N/A'}
                </Text>
                <Text
                  fontWeight="bold"
                  color={
                    cartItem.rating > 3.8
                      ? 'green.500'
                      : cartItem.rating > 2.5
                        ? 'yellow.500'
                        : 'red.500'
                  }
                >
                  Rating: {cartItem.rating?.toFixed(1) || 'No rating'}
                </Text>
                <Text
                  fontWeight="bold"
                  color={cartItem.stock > 0 ? 'green.500' : 'red.500'}
                >
                  Stock: {cartItem.stock > 0 ? `${cartItem.stock} available` : 'Out of stock'}
                </Text>
                <Text fontWeight="bold" color="teal.600">
                  Shipment: {cartItem.shippingInformation || 'Not available'}
                </Text>
                <NumberInput
                  size="sm"
                  maxW={20}
                  value={cartItem.quantity}
                  min={cartItem.minimumOrderQuantity}
                  max={cartItem.stock > 0 ? cartItem.stock : cartItem.minimumOrderQuantity}
                  onChange={(valueAsString, valueAsNumber) =>
                    handleQuantityChange(cartItem.id, valueAsNumber)
                  }
                  isDisabled={cartItem.stock <= 0} // Disable if no stock
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
                m={2}
                variant="solid"
                colorScheme="green"
                size="sm"
                borderRadius="full"
                isDisabled={cartItem.stock <= 0} // Disable if no stock
                onClick={() => handleBuyNow(cartItem)}
              >
                {cartItem.stock > 0 ? 'Buy Now' : 'Out of Stock'}
              </Button>
              <Button
                m={2}
                variant="solid"
                colorScheme="red"
                size="sm"
                borderRadius="full"
                onClick={() => handleRemoveFromCart(cartItem.id)}
              >
                {cartItem.stock > 0 ? 'Remove from Cart' : 'Out of Stock'}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </VStack>
    ))
  ) : (
    <Text p={4} textAlign="center" sx={{
      color: "gray.600",
      _dark: {
        color: "gray.300"
      }
    }}>
      Your cart is empty.
    </Text>
  );
}

export default Cart;
