import { Button, Input, Stack } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

interface Props {
  fontColor: string;
  backgroundColor: string;
  width: number;
}

export const TodoForm = ({ fontColor, backgroundColor, width }: Props) => {
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
      <Stack padding={2} width={width}>
        <Input
          onChange={(event) => setTodo({ ...todo, name: event.target.value })}
          value={todo.name}
          id="name"
          type="text"
          placeholder="new todo"
          size="md"
        />
        <Button
          type="submit"
          size="md"
          color={fontColor}
          colorScheme={fontColor}
          bg={backgroundColor}
        >
          Create New Todo
        </Button>
      </Stack>
    </form>
  );
};
