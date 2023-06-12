import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "../components/ColorModeSwitch";

export default function RootLayout() {
  return (
    <div>
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
      <Outlet />
    </div>
  );
}
