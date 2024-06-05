import { Image as ChakraImage, SimpleGrid, VStack } from "@chakra-ui/react"

export const CommunicationSection = () => {

  const images = [
    [
      {
        url: '/communication/img-1.jpg',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/communication/img-2.jpg',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/communication/img-3.png',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ],
    [
      {
        url: '/communication/img-4.jpg',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/communication/img-5.png',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/communication/img-6.jpg',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/communication/img-7.png',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
    ],
    [
      {
        url: '/communication/img-8.png',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/communication/img-9.png',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      },
      {
        url: '/communication/img-10.png',
        title: 'Communication',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum.'
      }
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
