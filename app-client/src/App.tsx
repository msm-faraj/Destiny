import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "./components/Sidebar/SideBar";
import TopBar from "./components/TopBar";
import LayOut from "./components/LayOut";

function App() {
  return (
    <LayOut>
      <GridItem area="header" bg="#bb3e03">
        <TopBar></TopBar>
      </GridItem>
      <Show above="md">
        {" "}
        <GridItem area="aside" bg="#005f73">
          <SideBar></SideBar>
        </GridItem>
      </Show>
      <GridItem area="main" bg="#0A9396">
        Main
      </GridItem>
      <GridItem area="footer" bg="#EE9B00">
        Footer
      </GridItem>
    </LayOut>
  );
}

export default App;
