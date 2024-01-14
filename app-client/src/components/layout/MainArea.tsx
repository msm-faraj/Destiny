import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <Grid
      bg="gray.100"
      h={"full"}
      color={"gray1"}
      fontWeight={"bold"}
      fontSize={"large"}
      p={5}
      borderRadius={0}
    >
      {children}
    </Grid>
  );
};

export default Main;
