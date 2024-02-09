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
        borderRadius={5}
        boxShadow={"base"}
        w={"full"}
        h={"full"}
        pl={5}
        pr={5}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <BiGitRepoForked fontSize={30} />
        <Text as="b" fontSize={25}>
          {` D E S T I N Y `}
        </Text>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default TopBar;
