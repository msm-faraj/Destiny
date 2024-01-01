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
      <GridItem pl="2" bg="secondary" area={"task"}>
        Task
      </GridItem>
      <GridItem pl="2" bg="danger" area={"todo"}>
        Todo
      </GridItem>
      <GridItem pl="2" bg="primary" area={"habit"}>
        Habit
      </GridItem>
      <GridItem pl="2" bg="darkgry" area={"footer"}>
        Footer
      </GridItem>
      <GridItem pl="2" bg="darkergry" area={"expence"}>
        Expence
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
