import { HStack, Text } from "@chakra-ui/react";
import { BiGitRepoForked } from "react-icons/bi";

interface Props {
  backgrounColor: string;
  fontColor: string;
}

const TopBar = ({ backgrounColor, fontColor }: Props) => {
  return (
    <>
      <HStack
        w={"full"}
        h={"full"}
        bg={backgrounColor}
        color={fontColor}
        pl={5}
        pr={5}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderRadius={10}
      >
        <BiGitRepoForked />
        <Text>Destiny</Text>
      </HStack>
    </>
  );
};

export default TopBar;
