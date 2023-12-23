import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoButton from "./TodoButton";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";

const Todo = () => {
  return (
    <>
      <div>Todo</div>
      <Divider />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        alignItems={"right"}
      >
        <TodoForm></TodoForm>
        <TodoButton></TodoButton>
        <Divider />
        <TodoList></TodoList>
      </Box>
    </>
  );
};

export default Todo;
