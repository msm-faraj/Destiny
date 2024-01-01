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
      color={"darkergry"}
      fontWeight={"bold"}
      fontSize={"large"}
      p={5}
      borderRadius={10}
    >
      {children}
    </Grid>
  );
};

export default Main;
