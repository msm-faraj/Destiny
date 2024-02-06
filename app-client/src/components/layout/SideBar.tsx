import {
  VStack,
  Box,
  HStack,
  Divider,
  Avatar,
  IconButton,
  background,
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
import { IoColorPalette } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

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
      icon: <FaCalendarDay />,
    },
    {
      path: "task",
      name: "task",
      icon: <GrTasks />,
    },
    {
      path: "todo",
      name: "todo",
      icon: <MdFactCheck />,
    },
    {
      path: "habit",
      name: "habit",
      icon: <BsUiChecksGrid />,
    },
    {
      path: "event",
      name: "event",
      icon: <IoBookmarks />,
    },
    {
      path: "expence",
      name: "expence",
      icon: <HiMiniShoppingBag />,
    },
    {
      path: "colors",
      name: "colors",
      icon: <IoColorPalette />,
    },
    {
      path: "dashboard",
      name: "dashboard",
      icon: <MdDashboard />,
    },
  ];

  return (
    <Box h={"full"} boxShadow={"2xl"}>
      <VStack
        pt={2}
        w={"full"}
        h={"full"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        spacing={"1vw"}
        borderRadius={10}
      >
        {/* Sidebar Top */}
        <HStack
          pb={"1vh"}
          pr={"1vh"}
          justifyContent={"right"}
          width={"full"}
          color={"gray.100"}
        >
          <Avatar size={"sm"}></Avatar>
          {/* Sidebar Close/Open Icon */}
          <Box fontSize={"2vh"} onClick={onClose}>
            {isSideBarOpen ? <IoChevronBack /> : <IoChevronForward />}
          </Box>
        </HStack>
        <Divider></Divider>
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <HStack
              display={"flex"}
              flexDirection={"row"}
              gap={"0.7vh"}
              width={isSideBarOpen ? "15vh" : "5vh"}
              h={"4vh"}
              pt={"2vh"}
              pl={isSideBarOpen ? "1vh" : "1vh"}
              pb={"2vh"}
              // bg={selectedIndex === index ? `${"gray.700"}` : `${"gray.50"}`}
            >
              {/* Sidebar Item Icon */}
              <Box
                // color={
                //   selectedIndex === index ? `${"gray.50"}` : `${"gray.700"}`
                // }
                fontSize={"3vh"}
              >
                {item.icon}
              </Box>
              {/* Sidevar Item Text */}
              {isSideBarOpen && (
                <Box
                  // color={
                  //   selectedIndex === index ? `${"gray.100"}` : `${"gray.800"}`
                  // }
                  // fontWeight={selectedIndex === index ? "400" : "200"}
                  fontSize={"2vh"}
                >
                  {item.name}
                </Box>
              )}
            </HStack>
          </Link>
        ))}
        <Divider></Divider>
      </VStack>
    </Box>
  );
};

export default SideBar;
