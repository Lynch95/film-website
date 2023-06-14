import { Box, Container, Image } from "@chakra-ui/react";

const ComingSoon = () => (
  <Container h='100%' maxW='100%' position='relative'>
    <Box h='100%' w='100%'>
      <Image
        src='./src/images/bms6.jpg'
        alt='Descriptive alt text'
        objectFit='cover'
        h='100%'
        w='100%'
      />
    </Box>
  </Container>
);

export default ComingSoon;
