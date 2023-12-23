import { Box, Divider } from "@mui/material";
import ExpenceInput from "./ExpenceInputs";
import ExpenceList from "./ExpenceList";
import ExpenceButton from "./ExpenceButton";
import ExpenceListToggle from "./ExpenceListToggle";

const Expence = () => {
  return (
    <>
      <div>Expences</div>
      <Divider />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        alignItems={"right"}
      >
        <ExpenceInput></ExpenceInput>
        <ExpenceButton></ExpenceButton>
        <Divider />
        <ExpenceListToggle></ExpenceListToggle>
        <ExpenceList></ExpenceList>
      </Box>
    </>
  );
};

export default Expence;
