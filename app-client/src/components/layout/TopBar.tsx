import { Box, Divider, HStack, Stack, Text } from "@chakra-ui/react";
import { SiAlwaysdata } from "react-icons/si";
import Logo from "../../assets/Logo";

const TopBar = () => {
  return (
    <HStack
      pl={5}
      pr={5}
      h="full"
      w={"full"}
      bg="primary"
      // borderRadius={10}
      // display={"flex"}
      justifyContent={"space-between"}
      // alignItems={"end"}
    >
      {/* <SiAlwaysdata /> */}
      <Stack
        fontWeight={"600"}
        fontSize={"xx-large"}
        color={"highlight"}
        bg="#333"
      >
        <Text>Destiny</Text>
      </Stack>

      <HStack h="100px" pt={3} bg="#333">
        <Logo color={"#EDF6F9"} size={60}></Logo>
      </HStack>
    </HStack>
  );
};

export default TopBar;
