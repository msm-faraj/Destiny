import { Box, Divider, HStack, Stack, Text } from "@chakra-ui/react";
import { SiAlwaysdata } from "react-icons/si";
import Logo from "../../assets/Logo";

const TopBar = () => {
  const color = "lightgry";
  return (
    <HStack
      pl={5}
      pr={5}
      h="full"
      w={"full"}
      bg="primary"
      borderRadius={10}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack>
        <SiAlwaysdata color={color} fontSize={50} />
      </Stack>

      <Stack direction="row" color={color} alignItems={"center"}>
        <Text fontWeight={"400"} fontSize={"xxx-large"}>
          Destiny
        </Text>
      </Stack>

      <HStack pt={3} mb={-1} align={"center"}>
        <Logo color={"#222"} size={60}></Logo>
      </HStack>
    </HStack>
  );
};

export default TopBar;
