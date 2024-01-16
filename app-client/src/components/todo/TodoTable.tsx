import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
interface Props {
  fontColor: string;
  backgroundColor: string;
  width: number;
}

export const TodoTable = ({ fontColor, backgroundColor, width }: Props) => {
  const [todos, setTodos] = useState([]);

  //Delete todo function
  const deleteTodo = async (id: any) => {
    try {
      const deleteTodo = await fetch(`http://localhost:4040/todos/${id}`, {
        method: "DELETE",
      });
      console.log(deleteTodo);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  //Get all todos
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4040/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  return (
    <TableContainer padding={2} width={width}>
      <Table size="sm" color={fontColor} bg={backgroundColor} borderRadius={5}>
        <Tbody>
          {todos.map((todo) => (
            <Tr fontSize={10} key={todo.id}>
              <Td width={5} p={1.5} color={fontColor} fontSize={12}>
                <RiCheckboxBlankCircleLine />
                {/* <RiCheckboxCircleFill /> */}
              </Td>
              <Td p={0} fontSize={12} fontWeight={"400"} color={"gray.200"}>
                {todo.todoName}
              </Td>
              <Td width={5} p={1.5} color={fontColor} fontSize={12}>
                {/* <BsStarFill /> */}
                <BsStar />
              </Td>
              <Td width={5} p={1.5} color={fontColor} fontSize={12}>
                <FaPencilAlt />
              </Td>
              {/* Delete todo */}
              <Td width={5} p={1.5} color={"red.400"} fontSize={12}>
                <RiDeleteBin5Fill onClick={() => deleteTodo(todo.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
