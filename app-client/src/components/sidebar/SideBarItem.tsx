import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  text: string;
  color: string;
}

const SideBarItem = ({ children, text, color }: Props) => {
  return (
    <Flex w={"full"} gap={1}>
      <Link to={text}>
        <Box display="flex" flexDirection={"row"}>
          <Icon h={8} w={8} color={color}>
            {children}
          </Icon>
          <Text color={color}>{text}</Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default SideBarItem;
