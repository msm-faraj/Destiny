import { HStack, Text } from "@chakra-ui/react";
interface Props {
  // backgrounColor: string;
  // fontColor: string;
}
const Footer = ({}: Props) => {
  return (
    <HStack
      w={"full"}
      h={"full"}
      // bg={backgrounColor}
      bg={"gray.400"}
      color={"gray.800"}
      borderRadius={10}
      fontWeight={"400"}
      fontSize={"large"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text>Footer</Text>
    </HStack>
  );
};

export default Footer;
