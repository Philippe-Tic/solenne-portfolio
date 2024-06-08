import { Image, Images } from "@/src/data/type";
import {
  Box,
  Button,
  Image as ChakraImage,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid, Text, VStack,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";

export const ImageSection = ({images}: {images: Images}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentImage, setCurrentImage] = useState<Image>();

  const handleOpen = (image: Image) => () => {
    setCurrentImage(image)
    onOpen()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='full' isCentered scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>{currentImage?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody as={VStack} spacing='8'>
            <Text>
              {currentImage?.content}
            </Text>
            <VStack margin='auto' maxW={{base: 'full', sm: '70%', md: '50%'}} spacing='8'>
              <ChakraImage alt={currentImage?.title} src={currentImage?.url} />
              {currentImage?.extraContent?.map((extra, index) => (
                extra.title === 'pdf' ? <Button as="a" target="_blank" href={extra.url} key={index} colorScheme="blue">Voir le document</Button> : <ChakraImage key={index} alt={extra.title} src={extra.url} />
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='gray' mr={3} onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SimpleGrid bgColor='gray.50' columns={{ base: 1, md: 1, lg: 3 }}
        spacing='8' py='8' px='8'>
        <VStack spacing='8'>
          {images[0].map((image, index) => (
            <Box
              key={index}
              w='full' h='full'
              overflow='hidden'
            >
              <Box
                as='button'
                onClick={handleOpen(image)}
                backgroundImage={image.url} backgroundSize='contain' backgroundColor='white' backgroundRepeat='no-repeat' backgroundPosition='center'
                w='full' h='full'
                aspectRatio='1/1'
                transition='all 0.2s ease-in-out'
                _hover={{
                  transform: 'scale(1.4)',
                }}
              >
              </Box>
            </Box>
          ))}
        </VStack>
        <VStack spacing='8'>
          {images[1].map((image, index) => (
            <Box
              key={index}
              w='full' h='full'
              overflow='hidden'
            >
              <Box
                as='button'
                onClick={handleOpen(image)}
                backgroundImage={image.url} backgroundSize='contain' backgroundColor='white' backgroundRepeat='no-repeat' backgroundPosition='center'
                w='full' h='full'
                aspectRatio='1/1'
                transition='all 0.2s ease-in-out'
                _hover={{
                  transform: 'scale(1.4)',
                }}
              >
              </Box>
            </Box>
          ))}
        </VStack>
        <VStack spacing='8'>
          {images[2].map((image, index) => (
            <Box
              key={index}
              w='full' h='full'
              overflow='hidden'
            >
              <Box
                as='button'
                onClick={handleOpen(image)}
                backgroundImage={image.url} backgroundSize='contain' backgroundColor='white' backgroundRepeat='no-repeat' backgroundPosition='center'
                w='full' h='full'
                aspectRatio='1/1'
                transition='all 0.2s ease-in-out'
                _hover={{
                  transform: 'scale(1.4)',
                }}
              >
              </Box>
            </Box>
          ))}
        </VStack>
      </SimpleGrid>
    </>
  )
}
