import { Divider, VStack } from "@chakra-ui/react";
import { IoBookmarks } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdFactCheck } from "react-icons/md";
import { BsUiChecksGrid } from "react-icons/bs";
import { GrTasks } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa6";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <VStack
      bg="primary"
      p={3}
      spacing={5}
      fontWeight={"400"}
      fontSize={"0.8rem"}
      h={"full"}
      borderRadius={10}
      justifyContent={"flex-start"}
      alignItems={"start"}
    >
      <SideBarItem text={"Daily"}>
        <FaCalendarDay />
      </SideBarItem>
      <Divider mt={-5}></Divider>
      <SideBarItem text={"Task"}>
        <GrTasks />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem text={"Todo"}>
        <MdFactCheck />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem text={"Habit"}>
        <BsUiChecksGrid />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem text={"Event"}>
        <IoBookmarks />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem text={"Expence"}>
        <HiMiniShoppingBag />
      </SideBarItem>
      <Divider mt={-5}></Divider>
      <SideBarItem text={"Dashboard"}>
        <MdDashboard />
      </SideBarItem>
      <Divider mt={-5}></Divider>
    </VStack>
  );
};

export default SideBar;
