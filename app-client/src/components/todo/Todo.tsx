import TodoList from "./TodoList";
import { Divider } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoButton from "./TodoButton";
import { Box } from "@mui/system";

const Todo = () => {
  return (
    <>
      <div>Todo</div>
      <Box
        gap={2}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <TodoForm></TodoForm>
        <TodoButton></TodoButton>
        <TodoList></TodoList>
      </Box>
    </>
  );
};

export default Todo;
