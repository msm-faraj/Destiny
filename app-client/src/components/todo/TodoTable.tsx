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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
interface Props {
  fontColor: string;
  backgroundColor: string;
  width: number;
}

export const TodoTable = ({ fontColor, backgroundColor, width }: Props) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4040/todos");
      const jsonData = await response.json();
      setTodos(jsonData);

      // console.log(jsonData);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <TableContainer padding={2} width={width}>
      <Table size="sm" color={fontColor} bg={backgroundColor} borderRadius={5}>
        <Tbody>
          {todos.map((todo) => (
            <Tr fontSize={10}>
              <Td width={5} p={1.5} color={"cyan.800"} fontSize={12}>
                {" "}
                <RiCheckboxBlankCircleLine />
                {/* <RiCheckboxCircleFill /> */}
              </Td>
              <Td p={0} fontSize={12} fontWeight={"500"}>
                {todo.todoName}
              </Td>
              <Td width={5} p={1.5} color={"cyan.800"} fontSize={12}>
                {/* <BsStarFill /> */}
                <BsStar />
              </Td>
              <Td width={5} p={1.5} color={"cyan.800"} fontSize={12}>
                <FaPencilAlt />
              </Td>
              <Td width={5} p={1.5} color={"red.500"} fontSize={12}>
                <RiDeleteBin5Fill />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
