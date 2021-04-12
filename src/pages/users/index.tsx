import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiDeleteBin4Line, RiPencilLine } from "react-icons/ri";
import { useQuery } from 'react-query'

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

export default function UserList() {
  const { data, isLoading, isFetching, error, refetch } = useQuery('usersCash', async () => {
    const { data } = await api.get('users')

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })

    return users
  }, {
    staleTime: 1000 * 5, // 5 segundos
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })


  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários

              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }

            </Heading>

           <Flex>
            <Button 
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                cursor="pointer"
                mr="4"
                onClick={() => refetch()}
              >
                Atualizar
              </Button>
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
          </Flex>

          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Erro ao carregar os dados</Text>
            </Flex>
          ) : (
            <>
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
                  { data.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="purple" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        { isWideVersion && <Td color="gray.200">{user.createdAt}</Td> }
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
                    )
                  }) }

                </Tbody>
              </Table>

              <Pagination />
            </>
          ) }

        </Box>
      </Flex>
    </Box>
  )
}