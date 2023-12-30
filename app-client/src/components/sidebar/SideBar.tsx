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
      p={5}
      fontWeight={"900"}
      fontSize={"1.2rem"}
      spacing={5}
      bg={"#bb3e03"}
      h={"full"}
    >
      <SideBarItem text={"Daily"} color={"#94d2bd"}>
        <FaCalendarDay />
      </SideBarItem>
      <SideBarItem text={"Todo"} color={"#94d2bd"}>
        <MdFactCheck />
      </SideBarItem>
      <SideBarItem text={"Task"} color={"#94d2bd"}>
        <GrTasks />
      </SideBarItem>
      <SideBarItem text={"Habit"} color={"#94d2bd"}>
        <BsUiChecksGrid />
      </SideBarItem>
      <SideBarItem text={"Event"} color={"#94d2bd"}>
        <IoBookmarks />
      </SideBarItem>
      <SideBarItem text={"Expence"} color={"#94d2bd"}>
        <HiMiniShoppingBag />
      </SideBarItem>
      <SideBarItem text={"Dashboard"} color={"#94d2bd"}>
        <MdDashboard />
      </SideBarItem>
    </VStack>
  );
};

export default SideBar;
