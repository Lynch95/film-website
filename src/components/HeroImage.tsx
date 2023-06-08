import { Container, Image, Box, Text, Center } from "@chakra-ui/react";

const HeroImage = () => {
  return (
    <Container h='100%' maxW='100%' position='relative'>
      <Box h='100%' w='100%'>
        <Image
          src='./src/images/aaron.jpg'
          alt='Descriptive alt text'
          objectFit='cover'
          h='100%'
          w='100%'
        />
        <Center
          position='absolute'
          top='0'
          right='0'
          bottom='0'
          left='500'
          zIndex='1'>
          <Text color='white' fontSize='xl'>
            Black Mirror season 6 coming on the 15th June!
            <p></p>
            <Box
              as='button'
              borderRadius='md'
              bg='tomato'
              color='white'
              px={2}
              h={10}>
              Find out more
            </Box>
          </Text>
        </Center>
      </Box>
    </Container>
  );
};

export default HeroImage;
