import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const Support = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="xl" mb={4}>
          Support Center
        </Heading>
        <Text
          sx={{
            fontSize: "lg" ,
         color: "gray.600",
         _dark:{
          color:"gray.200",
         }
          }} >
          We're here to help! Please fill out the form below for any inquiries or support requests.
        </Text>
      </Box>

      <Box
      sx={{
        
        bg:"white",
        _dark:{
          bg:"black"
        }
      }}
        p={6}
        borderRadius="md"
        boxShadow="md"
        maxW="container.sm"
        mx="auto"
        mb={8}
      >
        <Stack spacing={4} >
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>

          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" rows={6} />
          </FormControl>

          <Button colorScheme="blue" size="lg" mt={4}>
            Send Message
          </Button>
        </Stack>
      </Box>

      <Box sx={{bg:"white",_dark:{bg:"black",border:"1px",borderColor:'white  '}}}  p={6} borderRadius="md" boxShadow="md" maxW="container.md" mx="auto">
        <Heading as="h2" size="lg" mb={4}>
          Frequently Asked Questions
        </Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  What is the response time for support requests?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Our team typically responds to support requests within 24-48 hours. We aim to address all inquiries as quickly as possible.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How can I track the status of my support request?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              You can track the status of your support request through our support portal. We will also send email updates regarding your request.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  What information should I include in my support request?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Please provide as much detail as possible, including a description of the issue, any error messages, and steps to reproduce the problem.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Support;
