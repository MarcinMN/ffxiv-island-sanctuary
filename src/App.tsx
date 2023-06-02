import { Grid, GridItem, Show } from "@chakra-ui/react";
import ResourceSelector from "./components/ResourceSelector";
import MapDisplay from "./components/MapDisplay";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "600px 1fr",
      }}
    >
      <GridItem area="nav" backgroundColor="green.500">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" backgroundColor="blue.500">
          <ResourceSelector />
        </GridItem>
      </Show>
      <GridItem area="main" backgroundColor="red.500">
        <MapDisplay />
      </GridItem>
    </Grid>
  );
}

export default App;
