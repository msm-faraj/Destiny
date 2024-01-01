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
        "main main"
        "footer footer"  
        `,
        md: `
        "header header"
        "aside main"
        "footer footer"  
        `,
        lg: `
        "header header"
        "aside main"
        "footer footer"  
        `,
      }}
      gridTemplateRows={"65px 5fr 2fr"}
      gridTemplateColumns={"1fr 9fr"}
      gap="1"
    >
      {children}
    </Grid>
  );
};

export default LayOut;
