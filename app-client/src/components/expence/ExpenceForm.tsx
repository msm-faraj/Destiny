import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
  Text,
  HStack,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
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

  //Style object of component
  // const style = {
  //   border: "1px",
  //   borderColor: "gray.500",
  //   borderRadius: "10",
  //   textDatnger: "red.700",
  //   buttonBg: "gray.300",
  //   fontSize: "1.7vh",
  // };

  // Send form-data to the server
  const addExpence = async (formData: FormData) => {
    try {
      await fetch("http://localhost:4040/expences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(addExpence)}>
      <Stack
        // bg={"gray.400"}
        p={2}
        // borderRadius={style.borderRadius}
        // border={style.border}
        // borderColor={style.borderColor}
      >
        <Text fontSize={"xl"} pb={"2"}>
          Expence Form
        </Text>
        <FormControl>
          <Flex direction={"column"}>
            {/* Account */}
            <HStack>
              <Box width={"20%"}>
                {" "}
                <FormLabel
                  htmlFor="account"
                  // fontSize={style.fontSize}
                >
                  Account
                </FormLabel>
              </Box>
              <Box width={"45%"}>
                {" "}
                <Select
                  // fontSize={style.fontSize}
                  // borderRadius={style.borderRadius}
                  // border={style.border}
                  // borderColor={style.borderColor}
                  {...register("account")}
                  id="account"
                  placeholder="Select country"
                >
                  {accounts.map((account, i) => (
                    <option key={i}>{account}</option>
                  ))}
                </Select>
                {errors.account && (
                  <Text
                  // color={style.textDatnger}
                  >
                    {errors.account.message}
                  </Text>
                )}
              </Box>
            </HStack>
            {/* Time  */}
            <HStack>
              <Box width={"20%"}>
                {" "}
                <FormLabel
                  // fontSize={style.fontSize}
                  htmlFor="label"
                >
                  Time
                </FormLabel>
              </Box>
              <Box width={"45%"}>
                {" "}
                <Input
                  // fontSize={style.fontSize}
                  // borderRadius={style.borderRadius}
                  // border={style.border}
                  // borderColor={style.borderColor}
                  {...register("time", { valueAsDate: true })}
                  id="time"
                  type="datetime-local"
                  placeholder="Date & Time"
                />
                {errors.time && (
                  <Text
                  // color={style.textDatnger}
                  >
                    {errors.time.message}
                  </Text>
                )}
              </Box>
            </HStack>
            {/* Category */}
            <HStack>
              <Box width={"20%"}>
                {" "}
                <FormLabel
                  // fontSize={style.fontSize}
                  htmlFor="category"
                >
                  Category
                </FormLabel>
              </Box>
              <Box width={"45%"}>
                {" "}
                <Select
                  // fontSize={style.fontSize}
                  // borderRadius={style.borderRadius}
                  // border={style.border}
                  // borderColor={style.borderColor}
                  id="category"
                  {...register("category")}
                  placeholder="Select country"
                >
                  {categories.map((category, i) => (
                    <option key={i}>{category}</option>
                  ))}
                </Select>
                {errors.category && (
                  <Text
                  // color={style.textDatnger}
                  >
                    {errors.category.message}
                  </Text>
                )}
              </Box>
            </HStack>
            {/* Amount */}
            <HStack>
              <Box width={"20%"}>
                {" "}
                <FormLabel
                  // fontSize={style.fontSize}
                  htmlFor="amoutn"
                >
                  Amount
                </FormLabel>
              </Box>
              <Box width={"45%"}>
                {" "}
                <NumberInput max={1000000000000000} min={0}>
                  <NumberInputField
                    // fontSize={style.fontSize}
                    // borderRadius={style.borderRadius}
                    // border={style.border}
                    // borderColor={style.borderColor}
                    {...register("amount", { valueAsNumber: true })}
                    id="amount"
                    placeholder="00.00 $"
                  />
                </NumberInput>
                {errors.amount && (
                  <Text
                  // color={style.textDatnger}
                  >
                    {errors.amount.message}
                  </Text>
                )}
              </Box>
            </HStack>
            {/* Note */}
            <HStack>
              <Box width={"20%"}>
                <FormLabel
                  // fontSize={style.fontSize}
                  htmlFor="lable"
                >
                  Note
                </FormLabel>
              </Box>
              <Box width={"45%"}>
                {" "}
                <Input
                  // fontSize={style.fontSize}
                  // borderRadius={style.borderRadius}
                  // border={style.border}
                  // borderColor={style.borderColor}
                  id="note"
                  {...register("note")}
                  type="text"
                  placeholder="Note"
                />
                {errors.note && (
                  <Text
                  // color={style.textDatnger}
                  >
                    {errors.note.message}
                  </Text>
                )}
              </Box>
            </HStack>
            {/* Description */}
            <HStack>
              <Box width={"20%"}>
                <FormLabel
                  // fontSize={style.fontSize}
                  htmlFor="description"
                >
                  Descripton
                </FormLabel>
              </Box>
              <Box width={"45%"}>
                {" "}
                <Input
                  // fontSize={style.fontSize}
                  // borderRadius={style.borderRadius}
                  // border={style.border}
                  // borderColor={style.borderColor}
                  id="description"
                  {...register("description")}
                  type="text"
                  placeholder="Descripton"
                />
                {errors.description && (
                  <Text
                  // color={style.textDatnger}
                  >
                    {errors.description.message}
                  </Text>
                )}
              </Box>
            </HStack>
            <HStack>
              <Button
                mt={2}
                // borderRadius={style.borderRadius}
                // border={style.border}
                // borderColor={style.borderColor}
                width={"full"}
                type="submit"
              >
                Create Expence
              </Button>
            </HStack>
          </Flex>
        </FormControl>
      </Stack>
    </form>
  );
};
