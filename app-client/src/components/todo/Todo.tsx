import { Box, Stack } from "@chakra-ui/react";
import { TodoForm } from "./TodoForm";
import { TodoTable } from "./TodoTable";

interface Props {
  fontColor: string;
  backgroundColor: string;
  width: number;
}

const Todo = ({ fontColor, backgroundColor, width }: Props) => {
  return (
    <>
      <Stack>
        <TodoForm
          fontColor={backgroundColor}
          backgroundColor={fontColor}
          width={width}
        ></TodoForm>
        <hr></hr>
        <TodoTable
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          width={width}
        ></TodoTable>
      </Stack>
    </>
  );
};

export default Todo;
