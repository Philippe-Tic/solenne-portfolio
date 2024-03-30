import { Box, Button, Flex, HStack, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';

const Homepage: React.FC = () => {
  return (
    <Box minH="100vh">
      <Box
        bgGradient="linear(to-r, blue.400, green.400)"
        w="full"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          p={4}
          borderRadius="lg"
          boxShadow="md"
        >
          Hello World
        </Box>
      </Box>
      <Flex position='sticky' justifyContent='center' top='0' w='full' h='16' background='gray.800'>
        <HStack spacing='32'>
          <Button colorScheme='blackAlpha'>Menu 1</Button>
          <Button colorScheme='blackAlpha'>Menu 1</Button>
          <Button colorScheme='blackAlpha'>Menu 1</Button>
          <Button colorScheme='blackAlpha'>Menu 1</Button>
        </HStack>
      </Flex>
      <SimpleGrid columns={3} spacing='8' pt='8'>
        <VStack spacing='8' pt='16'>
          <Image alt='cc' src="https://source.unsplash.com/random" />
          <Image alt='cc' src="https://source.unsplash.com/random" />
          <Image alt='cc' src="https://source.unsplash.com/random" />
          <Image alt='cc' src="https://source.unsplash.com/random" />
        </VStack>
        <VStack spacing='8'>
          <Image alt='cc' src="https://source.unsplash.com/random" />
          <Image alt='cc' src="https://source.unsplash.com/random" />
          <Image alt='cc' src="https://source.unsplash.com/random" />
          <Image alt='cc' src="https://source.unsplash.com/random" />
        </VStack>
        <VStack spacing='8' pt='48'>
          <Image alt='cc' src="https://source.unsplash.com/random" />
          <Image alt='cc' src="https://source.unsplash.com/random" />
          <Image alt='cc' src="https://source.unsplash.com/random" />
          <Image alt='cc' src="https://source.unsplash.com/random" />
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Homepage;