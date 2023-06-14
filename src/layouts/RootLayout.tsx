import { Link, Outlet } from "react-router-dom";
import { HStack, Box, Flex } from "@chakra-ui/react";
import ColorModeSwitch from "../components/ColorModeSwitch";

export default function RootLayout() {
  return (
    <Flex direction='column' minHeight='100vh'>
      <HStack
        justifyContent='space-between'
        padding='10px'
        fontWeight='bold'
        bg='blackAlpha.800'>
        <Link to='/'>Home</Link>
        <Link to='Reviews'>Reviews</Link>
        <Link to='ComingSoon'>Coming Soon</Link>

        <ColorModeSwitch />
      </HStack>

      <Flex direction='column' flexGrow='1'>
        <Outlet />
      </Flex>

      <Box bg='blackAlpha.800' color='white' p='10px' textAlign='center'>
        © 2023 BarryReviews
      </Box>
    </Flex>
  );
}
