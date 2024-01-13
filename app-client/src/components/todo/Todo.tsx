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
      <TodoForm
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        width={width}
      ></TodoForm>
      <TodoTable
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        width={width}
      ></TodoTable>
    </>
  );
};

export default Todo;
