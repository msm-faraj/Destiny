import { HStack, Text } from "@chakra-ui/react";

import { SiAlwaysdata } from "react-icons/si";

const TopBar = () => {
  return (
    <HStack>
      <SiAlwaysdata color="#94d2bd" size="40" />
      <Text color="#94d2bd" fontSize={"2rem"} fontWeight={"900"}>
        Destiny Is Now
      </Text>
    </HStack>
  );
};

export default TopBar;
