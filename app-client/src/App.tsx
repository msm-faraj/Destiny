import { GridItem, Show } from "@chakra-ui/react";
import SideBar from "./components/layout/SideBar";
import TopBar from "./components/layout/TopBar";
import LayOut from "./components/layout/LayOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Daily from "./components/daily/Daily";
import Todo from "./components/todo/Todo";
import Task from "./components/task/Task";
import Habit from "./components/Habit/Habit";
import Event from "./components/Event/Event";
import Expence from "./components/expence/Expence";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import { ColorPalette } from "./components/Theme/ColorPalette";

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <GridItem area="header">
          <TopBar></TopBar>
        </GridItem>

        <Show above="sm">
          <GridItem area="aside">
            <SideBar></SideBar>
          </GridItem>
        </Show>

        <GridItem area="main">
          <Main>
            <Routes>
              <Route path="/daily" element={<Daily />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/task" element={<Task />} />
              <Route path="/habit" element={<Habit />} />
              <Route path="/event" element={<Event />} />
              <Route path="/expence" element={<Expence />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/colors" element={<ColorPalette />} />
            </Routes>
          </Main>
        </GridItem>

        <GridItem area="footer">
          <Footer></Footer>
        </GridItem>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
