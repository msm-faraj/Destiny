import { Box, Divider } from "@mui/material";
import ExpenseInput from "./ExpenseInputs";
import ExpenseList from "./ExpenseList";
import ExpenseButton from "./ExpenseButton";
import ExpenseListToggle from "./ExpenseListToggle";

const Expense = () => {
  return (
    <>
      <div>Expense</div>
      <Divider />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        alignItems={"right"}
      >
        <ExpenseInput></ExpenseInput>
        <ExpenseButton></ExpenseButton>
        <Divider />
        <ExpenseListToggle></ExpenseListToggle>
        <ExpenseList></ExpenseList>
      </Box>
    </>
  );
};

export default Expense;
