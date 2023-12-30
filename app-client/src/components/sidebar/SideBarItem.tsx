import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { Children, ReactNode } from "react";
import { FaCalendarDay } from "react-icons/fa6";

interface Props {
  children: ReactNode;
  text: string;
  color: string;
}

const SideBarItem = ({ children, text, color }: Props) => {
  return (
    <Flex w={"full"} gap={1}>
      <Box>
        <Icon h={8} w={8} color={color}>
          {children}
        </Icon>
      </Box>
      <Box>
        <Text color={color}>{text}</Text>
      </Box>
    </Flex>
  );
};

export default SideBarItem;
