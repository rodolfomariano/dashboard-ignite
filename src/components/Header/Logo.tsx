import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      w="64"
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
    >
      DashGO
      <Text as="span" ml="1" color="purple.500">.</Text>
    </Text>
  )
}