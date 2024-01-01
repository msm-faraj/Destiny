import { Grid, GridItem } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Grid
      templateAreas={`"task task expence"
                    "todo habit expence"
                    "todo footer footer"`}
      gridTemplateRows={"1fr 2fr 1fr"}
      gridTemplateColumns={"1fr 2fr 1fr"}
      h="full"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"task"}>
        Task
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"todo"}>
        Todo
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"habit"}>
        Habit
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"expence"}>
        Expence
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
