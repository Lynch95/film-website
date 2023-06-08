import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import HeroImage from "./components/HeroImage";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
                  "hero hero"
                  "content content"
                  "footer footer"`}>
      <GridItem pl='2' bg='orange.300' area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem pl='2' area={"hero"}>
        <HeroImage />
      </GridItem>
      <GridItem pl='2' bg='gold' area={"content"}>
        content
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={"footer"}>
        footer
      </GridItem>
    </Grid>
  );
}

export default App;
