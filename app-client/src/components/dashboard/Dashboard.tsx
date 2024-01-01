import { Box, Stack } from "@chakra-ui/react";
import { Logo } from "../../assets/Logo";

const Dashboard = () => {
  return (
    <Stack display={"flex"} alignItems={"space between"} gap={0}>
      <Box bg={"primary"} color={"danger"}>
        primary
      </Box>
      <Box bg={"secondary"} color={"warning"}>
        secondary
      </Box>
      <Box bg={"darkgry"} color={"lightgry"}>
        darkgry
      </Box>
      <Box bg={"highlight"} color={"primary"}>
        highlight
      </Box>
      <Box bg={"lightgry"} color={"darkgry"}>
        lightgry
      </Box>
      <Box bg={"warning"} color={"secondary"}>
        warning
      </Box>
      <Box bg={"danger"} color={"primary"}>
        danger
      </Box>
      <Box
        borderRadius={20}
        bg={"secondary"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Logo size={300} color="#333"></Logo>
      </Box>
    </Stack>
  );
};

export default Dashboard;
