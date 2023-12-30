import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/TopBar";
import LayOut from "./components/LayOut";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Daily from "./components/daily/Daily";
import Todo from "./components/todo/Todo";
import Task from "./components/task/Task";
import Habit from "./components/Habit/Habit";
import Event from "./components/Event/Event";
import Expence from "./components/expence/Expence";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <GridItem area="header" bg="#005f73">
          <TopBar></TopBar>
        </GridItem>
        <Show above="md">
          <GridItem area="aside" bg="#94d2bd">
            <SideBar></SideBar>
          </GridItem>
        </Show>
        <GridItem area="main" bg="#0A9396">
          Main
          <Routes>
            <Route path="/daily" element={<Daily />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/task" element={<Task />} />
            <Route path="/habit" element={<Habit />} />
            <Route path="/event" element={<Event />} />
            <Route path="/expence" element={<Expence />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </GridItem>
        <GridItem
          area="footer"
          bg="#005f73"
          color="#ca6702"
          fontSize={"2rem"}
          fontWeight={"900"}
        >
          Footer
        </GridItem>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
