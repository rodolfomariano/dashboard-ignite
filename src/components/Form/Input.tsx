import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name} fontSize="sm">{label}</FormLabel> }

      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="purple.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        fontSize="ml"
        {...rest}
      />
    </FormControl>
  )
}