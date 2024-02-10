import {
  VStack,
  Box,
  HStack,
  Divider,
  Heading,
  Center,
  Text,
} from "@chakra-ui/react";
import { IoBookmarks } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdFactCheck } from "react-icons/md";
import { BsUiChecksGrid } from "react-icons/bs";
import { GrTasks } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";
import { CiGrid32 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiViewTimeline } from "react-icons/ci";

interface Props {
  isSideBarOpen: boolean;
  onCloseSideBar: () => void;
}

const SideBar = ({ isSideBarOpen, onCloseSideBar: onClose }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const menuItems = [
    {
      path: "daily",
      name: "daily",
      iconB: <FaCalendarDay />,
      icon: <CiCalendarDate />,
    },
    {
      path: "task",
      name: "task",
      iconB: <GrTasks />,
      icon: <CiViewTimeline />,
    },
    {
      path: "todo",
      name: "todo",
      iconB: <MdFactCheck />,
      icon: <CiBoxList />,
    },
    {
      path: "habit",
      name: "habit",
      iconB: <BsUiChecksGrid />,
      icon: <CiDumbbell />,
    },
    {
      path: "event",
      name: "event",
      iconB: <IoBookmarks />,
      icon: <CiShoppingTag />,
    },
    {
      path: "expence",
      name: "expence",
      iconB: <HiMiniShoppingBag />,
      icon: <CiWallet />,
    },
    {
      path: "dashboard",
      name: "dashboard",
      iconB: <MdDashboard />,
      icon: <CiGrid32 />,
    },
  ];

  return (
    <Box borderRadius={5} h={"full"} boxShadow={"2xl"}>
      <VStack>
        {/* Sidebar header */}
        <HStack p={2} pb={0} justifyContent={"right"} width={"full"}>
          {/* Sidebar Close/Open Icon */}
          <Box onClick={onClose}>
            {isSideBarOpen ? <IoChevronBack /> : <IoChevronForward />}
          </Box>
        </HStack>

        <Divider></Divider>

        {/* Sidebar Body */}
        {menuItems.map((item, index) => (
          <VStack
            p={1}
            key={index}
            justifyContent={"center"}
            w={"100%"}
            borderRadius={10}
          >
            <Link to={item.path} onClick={() => setSelectedIndex(index)}>
              {/* Sidebar Item Icon */}
              <Center p={1} pb={0} fontSize={"x-large"}>
                {item.icon}
              </Center>
              {/* Sidevar Item Text */}
              {isSideBarOpen && (
                <Center>
                  <Text as={"h2"} fontSize={"xs"} fontFamily={"roboto"}>
                    {item.name}
                  </Text>
                </Center>
              )}
            </Link>
            <Divider></Divider>
          </VStack>
        ))}
      </VStack>
    </Box>
  );
};

export default SideBar;
