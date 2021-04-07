import { HStack, Icon } from "@chakra-ui/react";
import { RiNavigationLine, RiUserLine } from "react-icons/ri";

export function NotificationNav() {
  return (
    <HStack
      spacing="4"
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNavigationLine} fontSize="20" />
      <Icon as={RiUserLine} fontSize="20" />
      
    </HStack>
  )
}