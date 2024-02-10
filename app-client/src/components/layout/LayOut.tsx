import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  isSidebarOpen: boolean;
}

const LayOut = ({ children, isSidebarOpen: openSideBar }: Props) => {
  return (
    <Grid
      gap={1}
      p={1}
      h={"100vh"}
      w={"100vw"}
      templateAreas={{
        base: `
        "header header"
        "aside main"
        "aside main"  
        `,
      }}
      gridTemplateRows={"6vh 1fr 8vh"}
      gridTemplateColumns={openSideBar ? "80px 1fr" : "48px 1fr"}
    >
      {children}
    </Grid>
  );
};

export default LayOut;
