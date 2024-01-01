import { Button, Input, Stack } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

export const TodoForm = () => {
  const [todo, setTodo] = useState({
    name: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        {" "}
        <Input
          onChange={(event) => setTodo({ ...todo, name: event.target.value })}
          value={todo.name}
          id="name"
          type="text"
          placeholder="name"
          size="md"
        />
        <Button type="submit" colorScheme="teal" size="md">
          Create New Todo
        </Button>
      </Stack>
    </form>
  );
};
