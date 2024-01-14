import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/freepick.svg";

interface Props {
  backgrounColor: string;
  fontColor: string;
  borderRadius: number;
}

const TopBar = ({ backgrounColor, fontColor, borderRadius }: Props) => {
  return (
    <>
      <HStack
        bg={backgrounColor}
        pl={1}
        pr={3}
        h="full"
        w="full"
        borderRadius={borderRadius}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image fill={"red"} boxSize={6} src={logo}></Image>
        <HStack align={"center"} h={"full"} color={fontColor}>
          <Text fontWeight={"400"} fontSize={"large"}>
            Destiny
          </Text>
        </HStack>
      </HStack>
    </>
  );
};

export default TopBar;
