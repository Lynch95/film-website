import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainIndex from "./components/HeroImage";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
                  "main main"
                  "footer footer"`}>
      <GridItem pl='2' bg='orange.300' area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem pl='2' area={"main"}>
        <MainIndex />
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={"footer"}>
        footer
      </GridItem>
    </Grid>
  );
}

export default App;
