import { Divider, VStack } from "@chakra-ui/react";
import { IoBookmarks } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdFactCheck } from "react-icons/md";
import { BsUiChecksGrid } from "react-icons/bs";
import { GrTasks } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa6";
import SideBarItem from "./SideBarItem";

interface Props {
  backgrounColor: string;
  fontColor: string;
  borderRadius: number;
}

const SideBar = ({ backgrounColor, fontColor, borderRadius }: Props) => {
  return (
    <VStack
      bg={backgrounColor}
      p={3}
      spacing={5}
      fontWeight={"400"}
      fontSize={"0.8rem"}
      h={"full"}
      borderRadius={borderRadius}
      justifyContent={"flex-start"}
      alignItems={"start"}
    >
      <SideBarItem fontColor={fontColor} text={"Daily"}>
        <FaCalendarDay />
      </SideBarItem>
      <Divider mt={-5}></Divider>
      <SideBarItem fontColor={fontColor} text={"Task"}>
        <GrTasks />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem fontColor={fontColor} text={"Todo"}>
        <MdFactCheck />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem fontColor={fontColor} text={"Habit"}>
        <BsUiChecksGrid />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem fontColor={fontColor} text={"Event"}>
        <IoBookmarks />
      </SideBarItem>
      {/* <Divider mt={-5}></Divider> */}
      <SideBarItem fontColor={fontColor} text={"expence"}>
        <HiMiniShoppingBag />
      </SideBarItem>
      <Divider mt={-5}></Divider>
      <SideBarItem fontColor={fontColor} text={"dashboard"}>
        <MdDashboard />
      </SideBarItem>
      <Divider mt={-5}></Divider>
      <SideBarItem fontColor={fontColor} text={"colors"}>
        <MdDashboard />
      </SideBarItem>
    </VStack>
  );
};

export default SideBar;
