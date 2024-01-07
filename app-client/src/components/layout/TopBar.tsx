import { Box, FormControl, HStack, Text } from "@chakra-ui/react";
import { GiDesertSkull } from "react-icons/gi";

import { Logo } from "../../assets/Logo";

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
        <HStack align={"center"} h={"full"} borderRadius={5} color={fontColor}>
          <Box>
            <GiDesertSkull color={fontColor} fontSize={50} />
          </Box>
        </HStack>

        <HStack align={"center"} h={"full"} color={fontColor}>
          <Text fontWeight={"400"} fontSize={"xx-large"}>
            Destiny
          </Text>
        </HStack>
      </HStack>
    </>
  );
};

export default TopBar;
