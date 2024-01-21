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
      w={"full"}
      h={"full"}
      bg={bg}
      borderRadius={20}
      overflowY={"scroll"}
    >
      {children}
    </Grid>
  );
};

export default Main;
