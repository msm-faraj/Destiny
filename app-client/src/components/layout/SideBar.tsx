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
      bg="primary2"
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
      <SideBarItem text={"task"}>
        <GrTasks />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem text={"todo"}>
        <MdFactCheck />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem text={"habit"}>
        <BsUiChecksGrid />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem text={"event"}>
        <IoBookmarks />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem text={"expence"}>
        <HiMiniShoppingBag />
      </SideBarItem>
      <Divider mt={-5}></Divider>
      <SideBarItem text={"dashboard"}>
        <MdDashboard />
      </SideBarItem>
      <Divider mt={-5}></Divider>
      <SideBarItem text={"colors"}>
        <MdDashboard />
      </SideBarItem>
    </VStack>
  );
};

export default SideBar;
