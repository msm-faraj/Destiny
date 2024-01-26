import { Stack, Table, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";
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
    axios
      .get<Expence[]>("http://localhost:4040/expences")
      .then((res) => setExpences(res.data));
  }, [expences]);

  return (
    <Stack bg={"gray.400"} p={2} borderRadius={10}>
      {/* Expence Table Title */}
      <Text as="b" fontSize={"xl"} pb={"2"}>
        Expence Form
      </Text>
      {/* Expence List Table */}
      <Table size="sm" borderRadius={5}>
        <Thead>
          <Tr>
            <Td>account</Td>
            <Td>category</Td>
            <Td>amount</Td>
            <Td>time</Td>
            <Td>note</Td>
            {/* {expences.map((expence, index) => (
              <Td>{Object.keys(expence)[index]}</Td>
            ))} */}
          </Tr>
        </Thead>
        {expences.map((expence, index) => (
          <Tbody>
            <Tr key={expence.id}>
              <Td>{expence.account}</Td>
              <Td>{expence.category}</Td>
              <Td>{expence.amount}</Td>
              <Td>{expence.time}</Td>
              <Td>{expence.note}</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </Stack>
  );
};
