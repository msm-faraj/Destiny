import { Avatar, Divider, Flex, Heading, Text } from "@chakra-ui/react";

const SideBar = () => {
  return (
    <Flex pos={"sticky"} left={"5"} h={"full"} w={"full"} boxShadow={"2xl"}>
      {/* Avatar */}
      <Flex></Flex>

      {/* Navigation Items */}
      <Flex
        p={"5%"}
        flexDir={"column"}
        width={"100%"}
        alignItems={"flex-start"}
        mb={"4"}
      >
        <Divider />
        <Flex>
          <Avatar size={"sm"} />
          <Flex flexDir={"column"} ml={4}>
            <Heading as="h3" size={"xs"}>
              msm-faraj
            </Heading>
            <Text>weber</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
