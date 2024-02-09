import {
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Expence {
  id: number;
  account: string;
  time: Date;
  category: string;
  amount: number;
  note: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export const ExpenceTable = () => {
  const [expences, setExpences] = useState<Expence[]>([]);

  useEffect(() => {
    axios.get<Expence[]>("http://localhost:4040/expences").then((res) => {
      setExpences(res.data);
    });
  }, []);

  return (
    <Stack
      // bg={"gray.400"}
      p={2}
      borderRadius={10}
    >
      {/* Expence Table Title */}
      <Heading fontSize={"xl"} pb={"2"}>
        Expence Form
      </Heading>
      {/* Expence List Table */}
      <Table size="xs" borderRadius={5}>
        <Thead h={10}>
          <Tr>
            <Td p={1}>time</Td>
            <Td p={1}>amount</Td>
            <Td p={1}>account</Td>
            <Td p={1}>category</Td>
            <Td p={1}>note</Td>
          </Tr>
        </Thead>
        <Tbody>
          {expences.map((expence, i) => (
            <Tr key={i}>
              <Td>{expence.time}</Td>
              <Td>{expence.amount}</Td>
              <Td>{expence.account}</Td>
              <Td>{expence.category}</Td>
              <Td>{expence.note}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};
