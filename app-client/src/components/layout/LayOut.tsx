import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const LayOut = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={{
        base: `
        "header header"
        "aside main"
        "aside footer"  
        `,
      }}
      gridTemplateRows={"25px 7fr 2fr"}
      gridTemplateColumns={"1fr 10fr"}
    >
      {children}
    </Grid>
  );
};

export default LayOut;
