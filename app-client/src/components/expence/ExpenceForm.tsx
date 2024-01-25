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
  Tr,
  Table,
  Td,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  account: z
    .string()
    .min(3, { message: "account must be at least 3 characters" })
    .max(30),
  time: z.date(),
  category: z.string().min(3).max(30),
  amount: z.number({ invalid_type_error: "Amount field is required" }),
  note: z.string().max(50).min(3),
  description: z.string().max(100).min(3),
});

type FormData = z.infer<typeof schema>;

interface Props {
  accounts: string[];
  categories: string[];
}

export const ExpenceForm = ({ accounts, categories }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const expStyle = {
    border: "1px",
    borderColor: "gray.500",
    borderRadius: "10",
    textDatnger: "red.700",
    buttonBg: "gray.300",
  };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        bg={"gray.400"}
        p={2}
        borderRadius={expStyle.borderRadius}
        border={expStyle.border}
        borderColor={expStyle.borderColor}
      >
        <Text as="b" fontSize={"3xl"} pb={"5"}>
          Expence Form
        </Text>
        <FormControl>
          <Table width={"-moz-fit-content"}>
            {/* Account */}
            <Tr>
              <Td border={"none"}>
                <FormLabel htmlFor="account">Account</FormLabel>
              </Td>
              <Box>
                <Select
                  borderRadius={expStyle.borderRadius}
                  border={expStyle.border}
                  borderColor={expStyle.borderColor}
                  {...register("account")}
                  id="account"
                  placeholder="Select country"
                >
                  {accounts.map((account) => (
                    <option>{account}</option>
                  ))}
                </Select>
                {errors.account && (
                  <Text color={expStyle.textDatnger}>
                    {errors.account.message}
                  </Text>
                )}
              </Box>
            </Tr>
            {/* Time  */}
            <Tr justifyContent={"space-between"}>
              <Td border={"none"}>
                <FormLabel htmlFor="label">Time</FormLabel>
              </Td>
              <Box>
                <Input
                  borderRadius={expStyle.borderRadius}
                  border={expStyle.border}
                  borderColor={expStyle.borderColor}
                  {...register("time", { valueAsDate: true })}
                  id="time"
                  type="datetime-local"
                  placeholder="Date & Time"
                />
              </Box>
              {errors.time && (
                <Text color={expStyle.textDatnger}>{errors.time.message}</Text>
              )}
            </Tr>
            {/* Category */}
            <Tr justifyContent={"space-between"}>
              <Td border={"none"}>
                <FormLabel htmlFor="category">Category</FormLabel>
              </Td>
              <Box>
                <Select
                  borderRadius={expStyle.borderRadius}
                  border={expStyle.border}
                  borderColor={expStyle.borderColor}
                  id="category"
                  {...register("category")}
                  placeholder="Select country"
                >
                  {categories.map((category) => (
                    <option>{category}</option>
                  ))}
                </Select>

                {errors.category && (
                  <Text color={expStyle.textDatnger}>
                    {errors.category.message}
                  </Text>
                )}
              </Box>
            </Tr>
            {/* Amount */}
            <Tr justifyContent={"space-between"}>
              <Td border={"none"}>
                <FormLabel htmlFor="amoutn">Amount</FormLabel>
              </Td>
              <Box>
                <NumberInput max={1000000000000000} min={0}>
                  <NumberInputField
                    borderRadius={expStyle.borderRadius}
                    border={expStyle.border}
                    borderColor={expStyle.borderColor}
                    {...register("amount", { valueAsNumber: true })}
                    id="amount"
                  />
                </NumberInput>
              </Box>
              {errors.amount && (
                <Text color={expStyle.textDatnger}>
                  {errors.amount.message}
                </Text>
              )}
            </Tr>
            {/* Note */}
            <Tr justifyContent={"space-between"}>
              <Td border={"none"}>
                <FormLabel htmlFor="lable">Note</FormLabel>
              </Td>
              <Box>
                <Input
                  borderRadius={expStyle.borderRadius}
                  border={expStyle.border}
                  borderColor={expStyle.borderColor}
                  id="note"
                  {...register("note")}
                  type="text"
                  placeholder="Note"
                />
              </Box>
              {errors.note && (
                <Text color={expStyle.textDatnger}>{errors.note.message}</Text>
              )}
            </Tr>
            {/* Description */}
            <Tr justifyContent={"space-between"}>
              <Td border={"none"}>
                <FormLabel htmlFor="description">Descripton</FormLabel>
              </Td>
              <Box>
                <Input
                  borderRadius={expStyle.borderRadius}
                  border={expStyle.border}
                  borderColor={expStyle.borderColor}
                  id="description"
                  {...register("description")}
                  type="text"
                  placeholder="Descripton"
                />
              </Box>
              {errors.description && (
                <Text color={expStyle.textDatnger}>
                  {errors.description.message}
                </Text>
              )}
            </Tr>
          </Table>
          <Button
            bg={expStyle.buttonBg}
            borderRadius={expStyle.borderRadius}
            border={expStyle.border}
            borderColor={expStyle.borderColor}
            width={"full"}
            type="submit"
          >
            Create Expence
          </Button>
        </FormControl>
      </Stack>
    </form>
  );
};
