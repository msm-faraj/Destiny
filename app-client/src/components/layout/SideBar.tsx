import { VStack, Box, HStack, Text, Divider } from "@chakra-ui/react";
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
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

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
  isSideBarOpen,
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
        pb={"1vh"}
        pl={"1vh"}
        pr={"1vh"}
        justifyContent={"right"}
        width={"full"}
        color={backgrounColor}
      >
        <Box onClick={onClose}>
          {isSideBarOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
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
            // alignItems={"center"}
            gap={"0.7vh"}
            width={isSideBarOpen ? "15vh" : "5vh"}
            h={"4vh"}
            pt={"2vh"}
            pl={isSideBarOpen ? "1vh" : "1vh"}
            pb={"2vh"}
            color={
              selectedIndex === index ? `${fontColor}` : `${backgrounColor}`
            }
            bg={selectedIndex === index ? `${backgrounColor}` : `${fontColor}`}
          >
            <Box fontSize={"3vh"}>{item.icon}</Box>
            {isSideBarOpen && (
              <Box
                fontWeight={selectedIndex === index ? "bold" : "200"}
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
  );
};

export default SideBar;
