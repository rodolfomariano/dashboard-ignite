import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      w="64"
      fontSize="lg"
      fontWeight="bold"
      letterSpacing="tight"
    >
      DashGO
      <Text as="span" ml="1" color="purple.500">.</Text>
    </Text>
  )
}