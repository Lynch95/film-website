import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <div>
      <Grid
        templateAreas={`"nav nav"
            "content content"
            "footer footer"`}>
        <GridItem pl='2' area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem pl='2' area={"content"}>
          <HeroImage />
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={"footer"}>
          footer
        </GridItem>

        <Outlet />
      </Grid>
    </div>
  );
}
