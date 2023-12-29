import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `
        "header header"
        "main main"
        "footer footer"  
        `,
        md: `
        "header header"
        "aside main"
        "footer footer"  
        `,
        lg: `
        "header header"
        "aside main"
        "footer footer"  
        `,
      }}
    >
      <GridItem area="header" bg="#bb3e03">
        Header
      </GridItem>
      <Show above="md">
        {" "}
        <GridItem area="aside" bg="#005f73">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="#0A9396">
        Main
      </GridItem>
      <GridItem area="footer" bg="#EE9B00">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
