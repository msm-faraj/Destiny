import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { Props } from "./TodoForm";

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
      <Stack p={2} borderRadius={10}>
        <Text as="b" fontSize={"3xl"} pb={"5"}>
          Expence Form
        </Text>
        <Input
          onChange={(event) => setTodo({ ...todo, name: event.target.value })}
          value={todo.name}
          id="name"
          type="text"
          placeholder="new todo"
          size="md"
        />
        <Button type="submit" size="md">
          Create New Todo
        </Button>
      </Stack>
    </form>
  );
};
