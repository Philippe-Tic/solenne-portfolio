import { brasika } from '@/src/app/layout';
import { Box, Button, Flex, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Homepage: React.FC = () => {
  return (
    <Box minH="100vh"
      background="#DEF0F7"
    >
      <Box
        w="full"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundImage="url('/bg-home.png')"
        backgroundRepeat="no-repeat"
        aspectRatio="1657.12/936.7"
        backgroundSize="contain"
        maxW="full"
      >
        <Text fontSize="5xl" {...brasika}>
          HELLO
        </Text>
      </Box>
      <Flex position='sticky' justifyContent='center' top='0' w='full' h='16' background='gray.800'>
        <HStack spacing='32'>
          <Button colorScheme='blackAlpha'>Menu 1</Button>
          <Button colorScheme='blackAlpha'>Menu 1</Button>
          <Button colorScheme='blackAlpha'>Menu 1</Button>
          <Button colorScheme='blackAlpha'>Menu 1</Button>
        </HStack>
      </Flex>
      <SimpleGrid bgColor='white' columns={3} spacing='8' pt='8'>
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