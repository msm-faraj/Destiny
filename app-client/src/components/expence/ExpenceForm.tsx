import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  accounts: string[];
  categories: string[];
}

export const ExpenceForm = ({ accounts, categories }: Props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack bg={"gray.400"} p={2} borderRadius={10}>
        <Text as="b" fontSize={"3xl"} pb={"5"}>
          Expence Form
        </Text>
        <FormControl>
          {/* Account */}
          <HStack justifyContent={"space-between"}>
            <Box>
              <FormLabel htmlFor="account">Account</FormLabel>
            </Box>
            <Box>
              <Select
                {...register("account")}
                id="account"
                placeholder="Select country"
              >
                {accounts.map((account) => (
                  <option>{account}</option>
                ))}
              </Select>
            </Box>
          </HStack>

          {/* Time  */}
          <HStack justifyContent={"space-between"}>
            <Box>
              <FormLabel htmlFor="label">Time</FormLabel>
            </Box>
            <Box>
              <Input
                {...register("time")}
                id="time"
                type="datetime-local"
                placeholder="Date & Time"
              />
            </Box>
          </HStack>

          {/* Category */}
          <HStack justifyContent={"space-between"}>
            <Box>
              <FormLabel htmlFor="category">Category</FormLabel>
            </Box>
            <Box>
              <Select
                id="category"
                {...register("category")}
                placeholder="Select country"
              >
                {categories.map((category) => (
                  <option>{category}</option>
                ))}
              </Select>
            </Box>
          </HStack>

          {/* Amount */}
          <HStack justifyContent={"space-between"}>
            <Box>
              <FormLabel htmlFor="amoutn">Amount</FormLabel>
            </Box>
            <Box>
              <NumberInput max={1000000000000000} min={0}>
                <NumberInputField {...register("amount")} id="amount" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </HStack>

          {/* Note */}
          <HStack justifyContent={"space-between"}>
            <Box>
              <FormLabel htmlFor="lable">Note</FormLabel>
            </Box>
            <Box>
              <Input
                id="note"
                {...register("note")}
                type="text"
                placeholder="Note"
              />
            </Box>
          </HStack>

          {/* Description */}
          <HStack justifyContent={"space-between"}>
            <Box>
              <FormLabel htmlFor="description">Descripton</FormLabel>
            </Box>
            <Box>
              <Input
                id="description"
                {...register("description")}
                type="text"
                placeholder="Descripton"
              />
            </Box>
          </HStack>
          <HStack>
            <Button type="submit">Create Expence</Button>
          </HStack>
        </FormControl>
      </Stack>
    </form>
  );
};
