import { Grid, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  backgrounColor: string;
}

const Main = ({ children, backgrounColor }: Props) => {
  return (
    <Grid p={5} w={"full"} h={"full"} bg={backgrounColor} borderRadius={20}>
      {children}
    </Grid>
  );
};

export default Main;
