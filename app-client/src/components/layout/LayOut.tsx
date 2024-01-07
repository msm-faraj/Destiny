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
        "footer footer"  
        `,
      }}
      gridTemplateRows={"60px 7fr 2fr"}
      gridTemplateColumns={"1fr 10fr"}
      gap="1"
    >
      {children}
    </Grid>
  );
};

export default LayOut;
