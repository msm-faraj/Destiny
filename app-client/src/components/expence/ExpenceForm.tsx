import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  accounts: string[];
  categories: string[];
}

export const ExpenceForm = ({ accounts, categories }: Props) => {
  return (
    <form>
      <Stack bg={"gray.400"} p={2} borderRadius={10}>
        <Text as="b" fontSize={"3xl"} pb={"5"}>
          Expence Form
        </Text>
        {/* Account */}
        <FormControl>
          <FormLabel>Account</FormLabel>
          <Select placeholder="Select country">
            {accounts.map((account) => (
              <option>{account}</option>
            ))}
          </Select>
        </FormControl>

        {/* Date */}
        <FormControl>
          <FormLabel>Date & Time</FormLabel>
          <Input type="datetime-local" placeholder="Date & Time" />
        </FormControl>

        {/* Category */}
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select placeholder="Select country">
            {categories.map((category) => (
              <option>{category}</option>
            ))}
          </Select>
        </FormControl>

        {/* Amount */}
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <NumberInput max={1000000000000000} min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        {/* Note */}
        <FormControl>
          <FormLabel>Note</FormLabel>
          <Input type="text" placeholder="Note" />
        </FormControl>

        {/* Description */}
        <FormControl>
          <FormLabel>Descripton</FormLabel>
          <Input type="text" placeholder="Descripton" />
        </FormControl>
        <Button>Create Expence</Button>
      </Stack>
    </form>
  );
};
