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
interface Props {
  fontColor: string;
  backgroundColor: string;
}

export const TodoTable = ({ fontColor, backgroundColor }: Props) => {
  return (
    <TableContainer>
      <Table size="sm" color={fontColor} bg={backgroundColor}>
        <Thead>
          <Tr>
            <Th>done</Th>
            <Th>Todo</Th>
            <Th>import</Th>
            <Th>edit</Th>
            <Th>delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <RiCheckboxBlankCircleLine />
              <RiCheckboxCircleFill />
            </Td>
            <Td>todo</Td>
            <Td>
              <BsStarFill />
              <BsStar />
            </Td>
            <Td>
              <FaPencilAlt />
            </Td>
            <Td>
              <RiDeleteBin5Fill />
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>4/5</Th>
            <Th>into</Th>
            <Th>mult</Th>
            <Th>mult</Th>
            <Th>mul</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
