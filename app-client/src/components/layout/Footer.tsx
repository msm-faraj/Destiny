import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack
      h={"full"}
      bg="primary1"
      color={"primary3"}
      borderRadius={10}
      fontWeight={"400"}
      fontSize={"xx-large"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text>Footer</Text>
    </HStack>
  );
};

export default Footer;
