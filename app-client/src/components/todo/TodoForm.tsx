import { Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { FormEvent, useEffect, useRef, useState } from "react";

interface Props {
  // fontColor: string;
  // backgroundColor: string;
  // width: number;
}

export const TodoForm = ({}: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    //Side effect focus on input field
    if (ref.current) ref.current.focus();
  });

  const [newTodo, setTodo] = useState({});

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await fetch("http://localhost:4040/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Heading>Todo Form</Heading>
        <Input
          ref={ref}
          onChange={(event) =>
            setTodo({ ...newTodo, name: event.target.value })
          }
          value={newTodo.name}
          id="name"
          type="text"
          placeholder="new todo"
          size="sm"
        />
        <Button type="submit" size="sm">
          Create New Todo
        </Button>
      </Stack>
    </form>
  );
};
