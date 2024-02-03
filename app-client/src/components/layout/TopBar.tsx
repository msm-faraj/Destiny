import { HStack, Text } from "@chakra-ui/react";
import { BiGitRepoForked } from "react-icons/bi";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  // backgrounColor: string;
  // fontColor: string;
}

const TopBar = ({}: Props) => {
  return (
    <>
      <HStack
        w={"full"}
        h={"full"}
        bg={"gray.400"}
        color={"gray.900"}
        pl={5}
        pr={5}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderRadius={10}
      >
        <BiGitRepoForked fontSize={30} />
        <Text as="b" fontSize={25}>
          {` D E S T I Y `}
        </Text>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default TopBar;
