import { HStack, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Link href='#'>Home</Link>
      <Link href='#'>Reviews</Link>
      <Link href='#'>Coming Soon</Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
