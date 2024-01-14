import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  text: string;
  fontColor: string;
}

const SideBarItem = ({ children, text, fontColor }: Props) => {
  return (
    <Flex w={"full"} gap={1}>
      <Link to={text}>
        <Box display="flex" flexDirection={"row"} color={fontColor} gap={1}>
          <Icon h={6} w={6} fontSize={11}>
            {children}
          </Icon>
          <Text fontSize={10} fontWeight={"400"}>
            {text}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default SideBarItem;
