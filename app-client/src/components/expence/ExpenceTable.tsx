import { Stack, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { RiCheckboxBlankCircleLine, RiDeleteBin5Fill } from "react-icons/ri";

export const ExpenceTable = () => {
  const expences = ["one", "two", "three", "four", "five", "six"];

  return (
    <Stack bg={"gray.400"} p={2} borderRadius={10}>
      <Text as="b" fontSize={"3xl"} pb={"5"}>
        Expence Form
      </Text>
      {/* Expence List Table */}
      <Table size="md" borderRadius={5}>
        <Tbody>
          {expences.map((expence, index) => (
            <Tr key={index}>
              {/* Checked todo */}
              <Td width={5} p={1.5}>
                <RiCheckboxBlankCircleLine
                  onClick={() => {
                    console.log(index);
                  }}
                />
                {/* <RiCheckboxCircleFill /> */}
              </Td>

              <Td p={0}>{expence}</Td>

              {/* Important Todo */}
              <Td width={5} p={1.5}>
                {/* <BsStarFill /> */}
                <BsStar
                  onClick={() => {
                    console.log("Importented");
                  }}
                />
              </Td>

              {/* Edit todo */}
              <Td width={5} p={1.5}>
                <FaPencilAlt
                  onClick={() => {
                    console.log("Edited");
                  }}
                />
              </Td>

              {/* Delete todo */}
              <Td width={5} p={1.5} color={"red.400"}>
                <RiDeleteBin5Fill
                  onClick={() => {
                    console.log("Deleted");
                  }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};
