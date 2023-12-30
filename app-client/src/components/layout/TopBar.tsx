import { HStack, Text } from "@chakra-ui/react";

import { SiAlwaysdata } from "react-icons/si";

const TopBar = () => {
  return (
    <HStack
      pl={3}
      gap={3}
      h="full"
      bg="primary"
      color={"danger"}
      borderRadius={10}
      fontWeight={"700"}
      fontSize={"xx-large"}
    >
      <SiAlwaysdata />
      <Text>Destiny</Text>
    </HStack>
  );
};

export default TopBar;
