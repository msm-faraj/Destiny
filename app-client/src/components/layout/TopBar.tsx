import { Box, HStack, Text } from "@chakra-ui/react";
import { SiAlwaysdata } from "react-icons/si";
import { Logo } from "../../assets/Logo";
const TopBar = () => {
  const color = "#ddd";
  return (
    <HStack
      p={0}
      pl={5}
      pr={5}
      h="full"
      w="full"
      bg="primary1"
      borderRadius={5}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <HStack align={"center"} h={"full"} borderRadius={5}>
        {/* <Box h={"full"} display={"flex"} alignItems={"flex-end"} bg={"primary3"}>
          <SiAlwaysdata color={color} fontSize={30} />
        </Box> */}
        <Box>
          <Logo size={60} color={color}></Logo>
        </Box>
      </HStack>

      <HStack align={"center"} h={"full"} color={color}>
        <Text fontWeight={"400"} fontSize={"xx-large"}>
          Destiny
        </Text>
      </HStack>
    </HStack>
  );
};

export default TopBar;
