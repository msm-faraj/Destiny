import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  text: string;
}

const SideBarItem = ({ children, text }: Props) => {
  return (
    <Flex w={"full"} gap={1}>
      <Link to={text}>
        <Box display="flex" flexDirection={"row"} color={"lightgry"} gap={1}>
          <Icon h={6} w={6} fontSize={20}>
            {children}
          </Icon>
          <Text fontWeight={"400"}>{text}</Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default SideBarItem;
