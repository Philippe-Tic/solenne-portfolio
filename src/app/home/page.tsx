"use client"

import { brasika } from '@/src/app/layout';
import { Box, Button, Image as ChakraImage, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import React, { useState } from 'react';

const Homepage: React.FC = () => {
  const colors: {[key: string]: string} = {
    graphisme: '#7583BD',
    communication: '#FF974E',
    illustration: '#BDD8B5',
    media: "#FFC2DF",
    motion: "#FFCC5A",
  }

  const trad = {
    graphisme: 'Graphisme',
    communication: 'Communication',
    illustration: 'Illustration',
    media: 'Médias sociaux',
    motion: 'Motion design',
  }

  const [currentMenu, setCurrentMenu] = useState('graphisme');

  const isSmall = useBreakpointValue({ base: true, xl: false });

  const handleMenu = (menu: string) => () => {
    setCurrentMenu(menu)
  }

  return (
    <Box minH="100vh"
      background="#DEF0F7"
    >
      <Box
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        backgroundImage="url('/bg-home.png')"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        aspectRatio="4096/2304"
        maxW="full"
        position='relative'
        pr='10%'
        pl='55%'
      >
        <VStack alignItems='flex-start'>
          <Text color='#DF582B' fontSize={{base: 'xl', sm: '2xl', md: '3xl', lg: '5xl'}} {...brasika}>
          HELLO
          </Text>
          <Text fontSize={{base: 'sm', sm: 'md', md: 'lg',lg: 'xl'}}>
          Couteau suisse créatif de la communication, la gestion de projet et le graphisme, je suis à la recherche de ma prochaine expérience professionnelle.
          </Text>
        </VStack>
      </Box>
      <Flex position='sticky' justifyContent='center' alignItems='center' top='0' w='full' h='16' background={colors[currentMenu]} px='4'>
        {
          isSmall ? (
            <Menu>
              <MenuButton as={Button} colorScheme='whiteAlpha' color='gray.800' w='full'>
                {trad[currentMenu as keyof typeof trad]}
              </MenuButton>
              <MenuList w='calc(100vw - 2rem)'>
                <MenuItem onClick={handleMenu('graphisme')} justifyContent='center'>Graphisme</MenuItem>
                <MenuItem onClick={handleMenu('illustration')} justifyContent='center'>Illustration</MenuItem>
                <MenuItem onClick={handleMenu('communication')} justifyContent='center'>Communication</MenuItem>
                <MenuItem onClick={handleMenu('media')} justifyContent='center'>Médias sociaux</MenuItem>
                <MenuItem onClick={handleMenu('motion')} justifyContent='center'>Motion design</MenuItem>
              </MenuList>
            </Menu>
          ): (
            <HStack spacing='32'>
              <Button colorScheme={currentMenu === 'graphisme' ? 'transparent' : 'blackAlpha'} onClick={handleMenu('graphisme')}>Graphisme</Button>
              <Button colorScheme={currentMenu === 'illustration' ? 'transparent' : 'blackAlpha'} onClick={handleMenu('illustration')}>Illustration</Button>
              <Button colorScheme={currentMenu === 'communication' ? 'transparent' : 'blackAlpha'} onClick={handleMenu('communication')}>Communication</Button>
              <Button colorScheme={currentMenu === 'media' ? 'transparent' : 'blackAlpha'} onClick={handleMenu('media')}>Médias sociaux</Button>
              <Button colorScheme={currentMenu === 'motion' ? 'transparent' : 'blackAlpha'} onClick={handleMenu('motion')}>Motion design</Button>
            </HStack>
          )
        }
      </Flex>
      <SimpleGrid bgColor='white' columns={3} spacing='8' pt='8'>
        <VStack spacing='8' pt='16'>
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
        </VStack>
        <VStack spacing='8'>
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
        </VStack>
        <VStack spacing='8' pt='48'>
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
          <ChakraImage alt='' src="https://source.unsplash.com/random" />
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Homepage;
