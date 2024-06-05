import { Image as ChakraImage, SimpleGrid, VStack } from "@chakra-ui/react"

export const IllustrationSection = () => {

  const images = [
    [
      {
        url: '/illustration/img-1.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-2.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-3.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-4.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-5.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-6.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-7.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-8.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-25.png',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ],
    [
      {
        url: '/illustration/img-9.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-10.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-11.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-12.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-13.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-14.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-15.jpg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-16.jpeg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-17.jpeg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ],
    [
      {
        url: '/illustration/img-18.jpeg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-19.jpeg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-20.jpeg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-21.jpeg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-22.jpeg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-23.jpeg',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-24.png',
        title: 'Illustration',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/illustration/img-26.png',
        title: 'Illustration',
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
        {images[2].map((image, index) => (
          <ChakraImage key={index} alt='' src={image.url} />
        ))}
      </VStack>
      <VStack spacing='8'>
        {images[1].map((image, index) => (
          <ChakraImage key={index} alt='' src={image.url} />
        ))}
      </VStack>
    </SimpleGrid>
  )
}
