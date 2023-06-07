import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
                  "main main"
                  "footer footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      h='200px'>
      <GridItem pl='2' bg='orange.300' area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={"main"}>
        Main
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
