import { Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

interface Props {
  // fontColor: string;
  // backgroundColor: string;
  // width: number;
}

export const TodoForm = ({}: Props) => {
  const [todo, setTodo] = useState({
    name: "",
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await fetch("http://localhost:4040/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        // width={width}
        // color={fontColor}
        // bg={backgroundColor}
        p={2}
        borderRadius={10}
        border={"1px"}
        borderColor={"gray.500"}
      >
        <Heading as="h1" pb={"5"}>
          Todo Form
        </Heading>
        <Input
          onChange={(event) => setTodo({ ...todo, name: event.target.value })}
          value={todo.name}
          id="name"
          type="text"
          placeholder="new todo"
          size="md"
        />
        <Button type="submit" size="lg">
          Create New Todo
        </Button>
      </Stack>
    </form>
  );
};
