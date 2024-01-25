import { Grid, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bg: string;
}

const Main = ({ children, bg }: Props) => {
  return (
    <Grid
      p={5}
      w={"100%"}
      h={"100%"}
      bg={bg}
      borderRadius={10}
      overflowY={"scroll"}
      overflowX={"auto"}
    >
      {children}
    </Grid>
  );
};

export default Main;
