"use client"

import { CommunicationSection } from '@/src/components/CommunicationSection';
import { GraphismeSection } from '@/src/components/GraphismeSection';
import { IllustrationSection } from '@/src/components/IllustrationSection';
import { MediaSection } from '@/src/components/MediaSection';
import { MotionSection } from '@/src/components/MotionSection';
import { Box, Button, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Portal, Spacer, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronDown, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

type Section = 'graphisme' | 'communication' | 'illustration' | 'media' | 'motion';

export const Homepage: React.FC = () => {
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

  const [currentMenu, setCurrentMenu] = useState<Section>('graphisme');

  const isSmall = useBreakpointValue({ base: true, lg: false });

  const handleMenu = (menu: Section) => () => {
    setCurrentMenu(menu)
  }

  const contentSection: {[key in Section]: JSX.Element} = {
    'graphisme': <GraphismeSection />,
    'communication': <CommunicationSection />,
    'illustration': <IllustrationSection />,
    'media': <MediaSection />,
    'motion': <MotionSection />,
  }

  return (
    <>
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
          <Text color='#DF582B' fontSize={{base: 'xl', sm: '2xl', md: '3xl', lg: '5xl'}} fontFamily="'__brasika_43c43d', '__brasika_Fallback_43c43d'">
          HELLO
          </Text>
          <Text fontSize={{base: 'sm', sm: 'md', md: 'lg',lg: 'xl'}}>
            {
              !isSmall ? 'Couteau suisse créatif de la communication, la gestion de projet et le graphisme, je suis à la recherche de ma prochaine expérience professionnelle.' :
                'Couteau suisse créatif de la communication, la gestion de projet et le graphisme.'
            }
          </Text>
        </VStack>
      </Box>
      <Flex position='sticky' justifyContent='center' alignItems='center' top='0' w='full' h='16' background={colors[currentMenu]} px='4'>
        {
          isSmall ? (
            <Menu>
              <MenuButton as={Button} colorScheme='whiteAlpha' color='gray.800' w='full'>
                <HStack>
                  <Box as='span'>
                    {trad[currentMenu as keyof typeof trad]}
                  </Box>
                  <Spacer />
                  <Icon as={FaChevronDown} />
                </HStack>
              </MenuButton>
              <Portal>
                <MenuList w='calc(100vw - 2rem)'>
                  <MenuItem onClick={handleMenu('graphisme')} justifyContent='center'>Graphisme</MenuItem>
                  <MenuItem onClick={handleMenu('illustration')} justifyContent='center'>Illustration</MenuItem>
                  <MenuItem onClick={handleMenu('communication')} justifyContent='center'>Communication</MenuItem>
                  <MenuItem onClick={handleMenu('media')} justifyContent='center'>Médias sociaux</MenuItem>
                  <MenuItem onClick={handleMenu('motion')} justifyContent='center'>Motion design</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          ): (
            <HStack spacing='8'>
              <Button colorScheme={currentMenu === 'graphisme' ? 'whiteAlpha' : 'transparent'} color='gray.800' onClick={handleMenu('graphisme')}>Graphisme</Button>
              <Button colorScheme={currentMenu === 'illustration' ? 'whiteAlpha' : 'transparent'} color='gray.800' onClick={handleMenu('illustration')}>Illustration</Button>
              <Button colorScheme={currentMenu === 'communication' ? 'whiteAlpha' : 'transparent'} color='gray.800' onClick={handleMenu('communication')}>Communication</Button>
              <Button colorScheme={currentMenu === 'media' ? 'whiteAlpha' : 'transparent'} color='gray.800' onClick={handleMenu('media')}>Médias sociaux</Button>
              <Button colorScheme={currentMenu === 'motion' ? 'whiteAlpha' : 'transparent'} color='gray.800' onClick={handleMenu('motion')}>Motion design</Button>
            </HStack>
          )
        }
      </Flex>
      {contentSection[currentMenu]}
      <HStack as='footer' w='full' h='16' background='gray.800' color='white' display='flex' px={{base: 4, md: '32'}}>
        <Box>Solenne Dauriac - 2024</Box>
        <Spacer />
        <HStack>
          <IconButton as={Link} target='_blank' href='https://www.instagram.com/finchisreading/' size='xs' aria-label='instagram' icon={<Icon as={FaInstagram} />} />
          <IconButton as={Link} target='_blank' href='https://www.linkedin.com/in/solenne-dauriac/' size='xs' aria-label='linkedin' icon={<Icon as={FaLinkedin} />} />
          <IconButton as={Link} href='mailto:solenne.drc@gmail.com' size='xs' aria-label='mail' icon={<Icon as={FaEnvelope} />} />
        </HStack>
      </HStack>
    </>
  );
};
