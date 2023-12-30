import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack
      pl={3}
      h={"full"}
      bg="primary"
      color={"danger"}
      borderRadius={10}
      fontWeight={"700"}
      fontSize={"xx-large"}
    >
      <Text>Footer</Text>
    </HStack>
  );
};

export default Footer;
