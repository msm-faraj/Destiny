import { VStack, Box, HStack } from "@chakra-ui/react";
import { IoBookmarks } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdFactCheck } from "react-icons/md";
import { BsUiChecksGrid } from "react-icons/bs";
import { GrTasks } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  backgrounColor: string;
  fontColor: string;
  borderRadius: number;
}

const SideBar = ({ backgrounColor, fontColor }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const sideBarItems = {
    Daily: <FaCalendarDay />,
    task: <GrTasks />,
    todo: <MdFactCheck />,
    habit: <BsUiChecksGrid />,
    event: <IoBookmarks />,
    expence: <HiMiniShoppingBag />,
    dashboard: <MdDashboard />,
    colors: <MdDashboard />,
  };

  return (
    <VStack
      pt={2}
      w={"full"}
      h={"full"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      bg={backgrounColor}
      spacing={4}
      borderRadius={10}
    >
      {Object.keys(sideBarItems).map((key, index) => (
        <Link key={key} to={`/${key}`} onClick={() => setSelectedIndex(index)}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={1}
            width={"12vw"}
            p={1}
            color={
              selectedIndex === index ? `${backgrounColor}` : `${fontColor}`
            }
            bg={selectedIndex === index ? `${fontColor}` : `${backgrounColor}`}
          >
            <Box pl={1}>{Object.values(sideBarItems)[index]}</Box>
            <Box>{key}</Box>
          </Box>
        </Link>
      ))}
    </VStack>
  );
};

export default SideBar;
