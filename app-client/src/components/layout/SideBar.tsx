import { VStack, Box, HStack, Text } from "@chakra-ui/react";
import { IoBookmarks } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdFactCheck } from "react-icons/md";
import { BsUiChecksGrid } from "react-icons/bs";
import { GrTasks } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { IoColorPalette } from "react-icons/io5";

interface Props {
  backgrounColor: string;
  fontColor: string;
  borderRadius: number;
  isSideBarOpen: boolean;
  onCloseSideBar: () => void;
}

const SideBar = ({
  backgrounColor,
  fontColor,
  onCloseSideBar: onClose,
  isSideBarOpen: openSideBar,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const [isOpen, setIsIopen] = useState(false);
  // const toggle = () => setIsIopen(!isOpen);

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
      path: "dashboard",
      name: "dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "colors",
      name: "colors",
      icon: <IoColorPalette />,
    },
  ];

  return (
    <VStack
      pt={2}
      w={"full"}
      h={"full"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      bg={fontColor}
      spacing={"1vw"}
      borderRadius={10}
    >
      <HStack
        pr={"1vw"}
        justifyContent={"right"}
        width={"full"}
        color={backgrounColor}
      >
        <ImMenu onClick={onClose} />
      </HStack>
      {menuItems.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          onClick={() => setSelectedIndex(index)}
        >
          <HStack
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"0.7vw"}
            width={openSideBar ? "12vw" : "4vw"}
            h={"4vw"}
            pt={"2vw"}
            pl={1}
            pb={"2vw"}
            color={
              selectedIndex === index ? `${fontColor}` : `${backgrounColor}`
            }
            bg={selectedIndex === index ? `${backgrounColor}` : `${fontColor}`}
          >
            <Box fontSize={"2.3vw"}>{item.icon}</Box>
            {openSideBar && (
              <Box fontFamily={"oswald"} fontWeight={"600"} fontSize={"1.7vw"}>
                {item.name}
              </Box>
            )}
          </HStack>
        </Link>
      ))}
    </VStack>
  );
};

export default SideBar;
