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
      <GridItem pl="2" bg="gray.200" area={"task"}>
        Task
      </GridItem>
      <GridItem pl="2" bg="gray.300" area={"todo"}>
        Todo
      </GridItem>
      <GridItem pl="2" bg="gray.400" area={"habit"}>
        Habit
      </GridItem>
      <GridItem pl="2" bg="gray.500" area={"footer"}>
        Footer
      </GridItem>
      <GridItem pl="2" bg="gray.600" area={"expence"}>
        Expence
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
