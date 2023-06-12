import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Reviews() {
  return (
    <SimpleGrid p='10px' spacing={10} minChildWidth='250px'>
      <Box bgImage='./src/images/bm.jpg' h='200px' border='1px solid'></Box>
      <Box bgImage='./src/images/margot.jpg' h='200px' border='1px solid'></Box>
      <Box bg='tomato' h='200px' border='1px solid'></Box>
      <Box bg='tomato' h='200px' border='1px solid'></Box>

      <Box bg='tomato' h='200px' border='1px solid'></Box>
      <Box bg='tomato' h='200px' border='1px solid'></Box>
      <Box bg='tomato' h='200px' border='1px solid'></Box>
      <Box bg='tomato' h='200px' border='1px solid'></Box>
    </SimpleGrid>
  );
}
