import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack
      h={"full"}
      bg="primary"
      color={"lightgry"}
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
