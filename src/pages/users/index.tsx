import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiDeleteBin4Line, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="purple"
                leftIcon={<Icon as={RiAddLine} />}
                cursor="pointer"
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8" >
                  <Checkbox colorScheme="purple" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">User Name</Text>
                    <Text fontSize="sm" color="gray.300">username@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td color="gray.200">04 de abril,2021</Td> }
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    mr="2"
                    cursor="pointer"
                    
                  >
                    <Icon as={RiPencilLine} />
                  </Button>

                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="red"
                    cursor="pointer"
                  >
                    <Icon as={RiDeleteBin4Line} />
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">User Name</Text>
                    <Text fontSize="sm" color="gray.300">username@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td color="gray.200">04 de abril,2021</Td> }
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    mr="2"
                    cursor="pointer"
                    
                  >
                    <Icon as={RiPencilLine} />
                  </Button>

                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="red"
                    cursor="pointer"
                  >
                    <Icon as={RiDeleteBin4Line} />
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">User Name</Text>
                    <Text fontSize="sm" color="gray.300">username@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td color="gray.200">04 de abril,2021</Td> }
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    mr="2"
                    cursor="pointer"
                    
                  >
                    <Icon as={RiPencilLine} />
                  </Button>

                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="red"
                    cursor="pointer"
                  >
                    <Icon as={RiDeleteBin4Line} />
                  </Button>
                </Td>
              </Tr>
              
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}