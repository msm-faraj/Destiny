import { HStack, Text } from "@chakra-ui/react";

import { SiAlwaysdata } from "react-icons/si";

const TopBar = () => {
  return (
    <HStack>
      <SiAlwaysdata color="#Ca6702" size="40" />
      <Text color="#Ca6702" fontSize={"2rem"} fontWeight={"900"}>
        Destiny Is Now
      </Text>
    </HStack>
  );
};

export default TopBar;
