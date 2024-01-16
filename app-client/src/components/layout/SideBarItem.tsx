import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Box, Text, Flex, Icon, HStack, Center } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  text: string;
  fontColor: string;
}

const SideBarItem = ({ children, text, fontColor }: Props) => {
  return (
    <Link to={text}>
      <HStack>
        <Box>
          <Icon fontSize={23} color={fontColor}>
            {children}
          </Icon>
        </Box>
        <Box alignContent={"left"}>
          <Text fontWeight={"400"} color={fontColor}>
            {text}
          </Text>
        </Box>
      </HStack>
    </Link>
  );
};

export default SideBarItem;
