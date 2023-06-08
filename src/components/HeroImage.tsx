import { Container, Image, Box } from "@chakra-ui/react";

const HeroImage = () => {
  return (
    <Container h='100%' maxW='100%'>
      <Box h='100%' w='100%'>
        <Image
          src='./src/images/aaron.jpg'
          alt='Descriptive alt text' // remember to provide alt text for accessibility
          objectFit='cover'
          h='100%'
          w='100%'
        />
      </Box>
    </Container>
  );
};

export default HeroImage;
