import { Box } from "@chakra-ui/react";
import { TodoForm } from "./TodoForm";
import { TodoTable } from "./TodoTable";
import styles from "./Todo.module.css";

interface Props {
  fontColor: string;
  backgroundColor: string;
  width: number;
}

const Todo = ({ fontColor, backgroundColor, width }: Props) => {
  const handleDeleteTodo = (todo: string) => {
    console.log(todo);
  };

  return (
    <>
      <Box className={[styles.todoContainer, styles["todo-border"]].join(" ")}>
        <TodoForm
          fontColor={backgroundColor}
          backgroundColor={fontColor}
          width={width}
        ></TodoForm>
        <TodoTable
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          width={width}
        ></TodoTable>
      </Box>
    </>
  );
};

export default Todo;
