import { BsStar } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";

import {
  TableContainer,
  Table,
  Tr,
  Tbody,
  Td,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
      console.log("deleted");
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
    <Stack
      color={fontColor}
      bg={backgroundColor}
      p={2}
      borderRadius={10}
      border={"1px"}
      borderColor={"gray.500"}
    >
      <Text as="b" fontSize={"3xl"} pb={"5"}>
        Todo Form{" "}
      </Text>
      <TableContainer padding={2} width={width}>
        <Table size="md" borderRadius={5}>
          <Tbody>
            {todos.map((todo) => (
              <Tr key={todo.id}>
                {/* Checked todo */}
                <Td width={5} p={1.5}>
                  <RiCheckboxBlankCircleLine />
                  {/* <RiCheckboxCircleFill /> */}
                </Td>

                <Td p={0}>{todo.todoName}</Td>

                {/* Important Todo */}
                <Td width={5} p={1.5}>
                  {/* <BsStarFill /> */}
                  <BsStar />
                </Td>

                {/* Edit todo */}
                <Td width={5} p={1.5}>
                  <FaPencilAlt />
                </Td>

                {/* Delete todo */}
                <Td width={5} p={1.5} color={"red.400"}>
                  <RiDeleteBin5Fill
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
