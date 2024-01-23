import { GridItem, Show } from "@chakra-ui/react";
import SideBar from "./components/layout/SideBar";
import TopBar from "./components/layout/TopBar";
import LayOut from "./components/layout/LayOut";
import Daily from "./components/daily/Daily";
import Todo from "./components/todo";
import Task from "./components/task/Task";
import Habit from "./components/Habit/Habit";
import Event from "./components/Event/Event";
import Expence from "./components/expence/Expence";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/MainArea";
import { ColorPalette } from "./components/colors/ColorPalette";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const fontColor = "gray.700";
  const backgroundColor = "gray.300";
  const borderRadius = 0;
  const todoWidth = "";
  return (
    <BrowserRouter>
      <LayOut>
        <GridItem area="header">
          <TopBar
            fontColor={backgroundColor}
            backgrounColor={fontColor}
          ></TopBar>
        </GridItem>

        <GridItem area="aside">
          <SideBar
            fontColor={fontColor}
            backgrounColor={backgroundColor}
            borderRadius={borderRadius}
          ></SideBar>
        </GridItem>

        <GridItem area="main">
          <Main bg={"BlackAlpha.300"}>
            <Routes>
              <Route path="/daily" element={<Daily />} />
              <Route
                path="/todo"
                element={
                  <Todo
                    fontColor={fontColor}
                    backgroundColor={backgroundColor}
                    width={todoWidth}
                  />
                }
              />
              <Route path="/task" element={<Task />} />
              <Route path="/habit" element={<Habit />} />
              <Route path="/event" element={<Event />} />
              <Route path="/expence" element={<Expence />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/colors" element={<ColorPalette />} />
            </Routes>
          </Main>
        </GridItem>

        <GridItem display={"block"} area="footer">
          <Footer
            backgrounColor={fontColor}
            fontColor={backgroundColor}
          ></Footer>
        </GridItem>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
