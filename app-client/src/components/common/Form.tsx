import { Button, Input, Stack } from "@chakra-ui/react";
import { Label } from "@mui/icons-material";

export const Form = () => {
  return (
    <form>
      {" "}
      <label htmlFor="todo-name">New Todo</label>
      <Input
        id="todo-name"
        type="text"
        placeholder="extra small size"
        size="md"
      />
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
    </form>
  );
};
