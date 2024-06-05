import { Image as ChakraImage, SimpleGrid, VStack } from "@chakra-ui/react"

export const MediaSection = () => {

  const images = [
    [
      {
        url: '/media/img-1.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-2.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-3.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-4.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-5.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-12.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ],
    [
      {
        url: '/media/img-6.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-7.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-8.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-9.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-10.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-11.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ],
    [
      {
        url: '/media/img-13.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-14.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-15.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-16.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-17.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-18.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/media/img-19.jpg',
        title: 'Media',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ],
  ]

  return (
    <SimpleGrid bgColor='gray.50' columns={{base: 1, md: 2, lg: 3}} spacing='8' py='8' px='8'>
      <VStack spacing='8'>
        {images[0].map((image, index) => (
          <ChakraImage key={index} alt='' src={image.url} />
        ))}
      </VStack>
      <VStack spacing='8'>
        {images[1].map((image, index) => (
          <ChakraImage key={index} alt='' src={image.url} />
        ))}
      </VStack>
      <VStack spacing='8'>
        {images[2].map((image, index) => (
          <ChakraImage key={index} alt='' src={image.url} />
        ))}
      </VStack>
    </SimpleGrid>
  )
}
