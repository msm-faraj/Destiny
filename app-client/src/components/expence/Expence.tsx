import { Stack } from "@chakra-ui/react";
import { ExpenceForm } from "./ExpenceForm";
import { ExpenceTable } from "./ExpenceTable";

const accountsArr = [
  "Cash",
  "Rev",
  "Mellat",
  "Melli",
  "Populare",
  "Work",
  "Child",
];
const categoryArr = [
  "Housing",
  "Utilities",
  "Transportation",
  "Debt",
  "Food",
  "Healthcare",
  "Car",
];

const Expence = () => {
  return (
    <Stack>
      <ExpenceForm
        accounts={accountsArr}
        categories={categoryArr}
      ></ExpenceForm>
      <hr></hr>
      <ExpenceTable></ExpenceTable>
    </Stack>
  );
};

export default Expence;
