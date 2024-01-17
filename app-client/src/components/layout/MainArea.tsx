import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  backgroundColor: string;
}

const Main = ({ children, backgroundColor }: Props) => {
  return (
    <Grid
      overflow={"scroll"}
      bg={backgroundColor}
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
