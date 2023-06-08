import { HStack, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      justifyContent='space-between'
      padding='10px'
      fontWeight='bold'
      bg='blackAlpha.800'>
      <Link href='#'>Home</Link>
      <Link href='Reviews'>Reviews</Link>
      <Link href='ComingSoon'>Coming Soon</Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
