import { HStack, Text } from "@chakra-ui/react";

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
        pl={5}
        pr={5}
        h="full"
        w="full"
        borderRadius={borderRadius}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
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
