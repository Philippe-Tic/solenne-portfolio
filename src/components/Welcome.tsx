"use client"

import { Box, Flex, Spinner, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const animationKeyframes = keyframes`
  0% { transform: scale(1) translateY(0); opacity: 1}
  20% { transform: scale(1) translateY(20%) ; opacity: 1 }
  100% { transform: scale(1) translateY(-200%) ; opacity: 0 }
`;

const animation = `${animationKeyframes} 1s ease-in-out`;

export const Welcome = () => {
  const [anim, setAnim] = useState(false);
  const [displayImage, setDisplayImage] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!displayImage) {
      setTimeout(() => {
        router.push('/home');
      }, 500);
    }
  }, [displayImage, router]);

  if (!displayImage) return (
    <Flex w='100vw' h='100vh' alignItems='center'justifyContent='center'>
      <Spinner />
    </Flex>
  )

  return (
    <Flex
      as={motion.div}
      cursor='pointer'
      onClick={() => {
        setAnim(!anim);
        setTimeout(() => {
          setDisplayImage(false)
        }, 1000);
      }}
      maxW='100vw'
      h='100vh'
      animation={anim ? animation : undefined}
      alignItems='center'
      justifyContent='center'
      background="#DEF0F7"
      p='4'
    >
      <Box
        backgroundImage="url('/bg-index.png')"
        backgroundRepeat="no-repeat"
        aspectRatio="1657.12/936.7"
        backgroundSize="contain"
        maxW="full"
        h="full"
      />
    </Flex>
  )
};
