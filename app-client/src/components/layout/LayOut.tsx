import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  isSidebarOpen: boolean;
}

const LayOut = ({ children, isSidebarOpen: openSideBar }: Props) => {
  return (
    <Grid
      p={1}
      gap={1}
      h={"100vh"}
      w={"100vw"}
      templateAreas={{
        base: `
        "header header"
        "aside main"
        "aside footer"  
        `,
      }}
      gridTemplateRows={"6vh 80vh 12vh"}
      gridTemplateColumns={openSideBar ? "15vh 1fr" : "5vh 1fr"}
    >
      {children}
    </Grid>
  );
};

export default LayOut;
