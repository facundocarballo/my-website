import React from 'react';
import { VStack, HStack, Spacer, useColorModeValue, Box, Divider, Spinner, Center } from '@chakra-ui/react';
import { ProjectNavBar } from '../../../../src/components/projectNavBar';
import { SelectCurrency } from '../../../../projects/myWallet/components/selectCurrency';
import { useProvider } from '../../../../src/context/provider';
import { LogInSignIn } from '../../../../src/components/logInSignIn';
import { Amount } from '../../../../projects/myWallet/components/amount';
import { useWalletProvider, WalletProvider } from '../../../../projects/myWallet/context/provider';
import { SelectNationalCurrency } from '../../../../projects/myWallet/components/selectNationalCurrency';
import { Transactions } from '../../../../projects/myWallet/components/transactions';


export default function MyWalletES() {
    // TODO: todo estos datos tienen que ser manipulados por un provider que envuelva solo a myWallet.
    const { user } = useProvider();
    return (
        user == null ? <LogInSignIn es={true}/>
        : 
        <>
            <WalletProvider>
                <MyWalletDisplay />
            </WalletProvider>
        </>
    );
};

const MyWalletDisplay = () => {
    const { userWallet } = useWalletProvider();
    const bg = useColorModeValue('bgLight', 'bgDark');
    return (
        userWallet == null ?
            <VStack h='700px'>
                <Spacer />
                <Center>
                    <Spinner size='lg' />
                </Center>
                <Spacer />
            </VStack>
            : userWallet.currencies[0].name == '' ?
                <SelectNationalCurrency update={false} es={true}/>
                :
                <> 
                    <Box display={{lg: 'flex', md:'none', sm:'none', base:'none'}} minH='800px' bg={bg}>
                        <MyWalletDesktop />
                    </Box>
                    <Box display={{lg: 'none', md:'flex', sm:'flex', base:'flex'}} minH='800px' bg={bg}>
                        <MyWalletMobile />
                    </Box>
                    
                </>
    );
};

const MyWalletMobile = () => {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const bgDivider = useColorModeValue('gray.300', 'gray.600');
    return(
        <VStack bg={bg} w='full' h='full'>
            <ProjectNavBar title='MyWallet' es={true} />
            <Box h='70px' />
            <Amount />
            <SelectCurrency es={true}/>
            <Divider h='4px' bg={bgDivider}/>
            <Transactions es={true}/>
        </VStack>
    );
};

const MyWalletDesktop = () => {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const bgDivider = useColorModeValue('gray.300', 'gray.600');
    return (
        <VStack bg={bg} w='full' h='full'>
            <ProjectNavBar title='MyWallet' es={true} />
            <Box h='100px'/>
            <HStack w='full' h='full'>
                <Spacer />
                <SelectCurrency es={true}/>
                <Spacer />
                <Amount />
                <Spacer />
                <Box w='10px'/>
            </HStack>
            <Divider h='4px' bg={bgDivider}/>
            <Transactions es={true}/>
        </VStack>
    );
};