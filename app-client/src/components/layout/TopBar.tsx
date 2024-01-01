import { HStack, Stack, Text } from "@chakra-ui/react";
import { SiAlwaysdata } from "react-icons/si";
import { Logo } from "../../assets/Logo";
const TopBar = () => {
  const color = "#eee";
  return (
    <HStack
      p={0}
      pl={5}
      pr={5}
      h="full"
      w="full"
      bg="primary"
      borderRadius={5}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <HStack align={"center"} h={"full"} borderRadius={5}>
        <SiAlwaysdata color={color} fontSize={25} />
      </HStack>

      <HStack align={"center"} h={"full"} color={color}>
        <Text fontWeight={"400"} fontSize={"xx-large"}>
          Destiny
        </Text>
      </HStack>

      <HStack align={"center"} h={"full"} borderRadius={5}>
        <Logo size={60} color={color}></Logo>
      </HStack>
    </HStack>
  );
};

export default TopBar;
