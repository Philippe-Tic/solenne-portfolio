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

export default function Home() {
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
    <Box
      as={motion.div}
      cursor='pointer'
      onClick={() => {
        setAnim(!anim);
        setTimeout(() => {
          setDisplayImage(false)
        }, 1000);
      }}
      backgroundImage={`url('https://source.unsplash.com/random')`}
      w='100vw'
      h='100vh'
      animation={anim ? animation : undefined}
    />
  )
};