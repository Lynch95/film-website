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
          top={["70%", "10%", "5%", "0"]}
          right='0'
          bottom='0'
          left={["0", "10%", "40%", "10%"]}
          zIndex='1'
          p={["2", "4", "6", "0"]}>
          <Text color='white' fontSize={["7", "md", "15", "xl"]}>
            Black Mirror season 6 is out now...
            <p></p>
            <Box
              as='button'
              borderRadius='md'
              bg='tomato'
              color='white'
              px={["0", "2", "2", "2"]}
              h={["4", "8", "8", "10"]}>
              Find out more
            </Box>
          </Text>
        </Center>
      </Box>
    </Container>
  );
};

export default HeroImage;
