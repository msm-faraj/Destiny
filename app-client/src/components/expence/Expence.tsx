import { Box, Divider } from "@mui/material";
import ExpenceInput from "./ExpenceInput";
import ExpenceList from "./ExpenceList";
import ExpenceButton from "./ExpenceButton";

const Expence = () => {
  return (
    <>
      <div>Expences</div>
      <Divider />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        alignItems={"right"}
      >
        <ExpenceInput></ExpenceInput>
        <ExpenceButton></ExpenceButton>
        <Divider />
        <ExpenceList></ExpenceList>
      </Box>
    </>
  );
};

export default Expence;
