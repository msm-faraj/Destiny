import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <Grid
      bg="highlight"
      h={"full"}
      color={"primary"}
      fontWeight={"bold"}
      fontSize={"xxx-large"}
      p={5}
      borderRadius={10}
    >
      {children}
    </Grid>
  );
};

export default Main;
