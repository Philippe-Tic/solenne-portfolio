import { Box, SimpleGrid, VStack } from "@chakra-ui/react"

export const MotionSection = () => {

  const videos = [
    [
      {
        url: '/motion/vid-1.mp4',
      },
      {
        url: '/motion/vid-2.mp4',
      }
    ],
    [
      {
        url: '/motion/vid-3.mp4',
      },
      {
        url: '/motion/vid-4.mp4',
      }]
  ]

  return (
    <SimpleGrid bgColor='gray.50' columns={{base: 1, lg: 2}} spacing='8' p='8'>
      <VStack spacing='8'>
        {videos[0].map((video, index) => (
          <Box
            key={index}
            as='video'
            controls
            src={video.url}
            objectFit='contain'
            sx={{
              aspectRatio: '16/9'
            }}
          />
        ))}
      </VStack>
      <VStack spacing='8'>
        {videos[1].map((video, index) => (
          <Box
            key={index}
            as='video'
            controls
            src={video.url}
            objectFit='contain'
            sx={{
              aspectRatio: '16/9'
            }}
          />
        ))}
      </VStack>
    </SimpleGrid>
  )
}
