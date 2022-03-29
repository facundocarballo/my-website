import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { VStack, HStack, Heading, Text, Table, Spacer, Box, Thead, Tr, Th, Tbody, Td, Spinner} from "@chakra-ui/react";
import { useWalletProvider } from "../context/provider";

export interface ITransactions {
    es: boolean
};

export const Transactions = ({es}: ITransactions) => {
    const { userWallet } = useWalletProvider();
    return(
        userWallet == null ? <Spinner /> :
        <>
            <VStack w='full' h='full' display={{lg: 'flex', md: 'flex', sm:'none', base: 'none'}}>
            <Heading>{es ? 'Transacciones' : 'Transactions'}</Heading>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>{es ? 'Fecha' : 'Date'}</Th>
                        <Th>{es ? 'Moneda' : 'Currency'}</Th>
                        <Th>{es ? 'Cantidad' : 'Amount'}</Th>
                        <Th>Info</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        userWallet.transactions.map((transaction, idx) => 
                            <Tr key={idx}>
                                <Td>{transaction.date}</Td>
                                <Td>{transaction.currency.toUpperCase()}</Td>
                                <Td>
                                    <HStack>
                                        {
                                            transaction.profit ?
                                                 <ArrowUpIcon color='green.300' boxSize='30px' />
                                            : <ArrowDownIcon color='red.400' boxSize='30px'/>
                                        }
                                        <Text>{transaction.amount}</Text>
                                    </HStack>
                                </Td>
                                <Td>{transaction.info}</Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
        </VStack>
        <VStack w='full' h='full' display={{lg: 'none', md: 'none', sm:'flex', base: 'flex'}}>
            <Heading size='md'>{es ? 'Transacciones' : 'Transactions'}</Heading>
            <Table variant='simple' size='sm'>
                <Thead>
                    <Tr>
                        <Th>{es ? 'Fecha' : 'Date'}</Th>
                        <Th>{es ? 'Moneda' : 'Currency'}</Th>
                        <Th>{es ? 'Cantidad' : 'Amount'}</Th>
                        <Th>Info</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        userWallet.transactions.map((transaction, idx) => 
                            <Tr key={idx}>
                                <Td>{transaction.date}</Td>
                                <Td>{transaction.currency.toUpperCase()}</Td>
                                <Td>
                                    <HStack>
                                        {
                                            transaction.profit ?
                                                 <ArrowUpIcon color='green.300' boxSize='30px' />
                                            : <ArrowDownIcon color='red.400' boxSize='30px'/>
                                        }
                                        <Text>{transaction.amount}</Text>
                                    </HStack>
                                </Td>
                                <Td>{transaction.info}</Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
        </VStack>
        </>

    );
};