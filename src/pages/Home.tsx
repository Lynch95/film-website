import { Grid, GridItem } from "@chakra-ui/react";
import HeroImage from "../components/HeroImage";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
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
    </Grid>
  );
}
