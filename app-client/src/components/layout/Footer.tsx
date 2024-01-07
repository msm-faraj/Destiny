import { HStack, Text } from "@chakra-ui/react";
interface Props {
  backgrounColor: string;
  fontColor: string;
  borderRadius: number;
}
const Footer = ({ fontColor, backgrounColor, borderRadius }: Props) => {
  return (
    <HStack
      h={"full"}
      bg={backgrounColor}
      color={fontColor}
      borderRadius={borderRadius}
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
