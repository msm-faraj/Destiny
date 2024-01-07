import { background } from "@chakra-ui/react";
import { TodoForm } from "./TodoForm";
import { TodoTable } from "./TodoTable";

interface Props {
  fontColor: string;
  backgroundColor: string;
}

const Todo = ({ fontColor, backgroundColor }: Props) => {
  return (
    <>
      <TodoForm
        fontColor={fontColor}
        backgroundColor={backgroundColor}
      ></TodoForm>
      <TodoTable
        fontColor={fontColor}
        backgroundColor={backgroundColor}
      ></TodoTable>
    </>
  );
};

export default Todo;
