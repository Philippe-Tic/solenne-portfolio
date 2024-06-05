import { Image as ChakraImage, SimpleGrid, VStack } from "@chakra-ui/react"

export const GraphismeSection = () => {

  const images = [
    [
      {
        url: '/graphisme/img-1.png',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-2.png',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-3.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-4.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-5.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-6.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-21.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ],
    [
      {
        url: '/graphisme/img-7.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-8.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-9.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-10.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-11.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-12.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ],
    [
      {
        url: '/graphisme/img-14.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-15.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-16.png',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-17.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-18.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-19.png',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-20.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-13.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-22.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/graphisme/img-23.jpg',
        title: 'Graphisme',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ]
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
