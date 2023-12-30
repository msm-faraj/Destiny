import { VStack } from "@chakra-ui/react";
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
      p={5}
      pt={8}
      pb={8}
      spacing={8}
      fontWeight={"900"}
      fontSize={"1.2rem"}
      h={"full"}
      borderRadius={10}
    >
      <SideBarItem text={"Daily"}>
        <FaCalendarDay />
      </SideBarItem>
      <SideBarItem text={"Todo"}>
        <MdFactCheck />
      </SideBarItem>
      <SideBarItem text={"Task"}>
        <GrTasks />
      </SideBarItem>
      <SideBarItem text={"Habit"}>
        <BsUiChecksGrid />
      </SideBarItem>
      <SideBarItem text={"Event"}>
        <IoBookmarks />
      </SideBarItem>
      <SideBarItem text={"Expence"}>
        <HiMiniShoppingBag />
      </SideBarItem>
      <SideBarItem text={"Dashboard"}>
        <MdDashboard />
      </SideBarItem>
    </VStack>
  );
};

export default SideBar;
