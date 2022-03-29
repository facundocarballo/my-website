import React from 'react';
import Head from 'next/head';
import { VStack, HStack, Spacer, useColorModeValue, Box, Divider, Spinner, Center } from '@chakra-ui/react';
import { ProjectNavBar } from '../../../src/components/projectNavBar';
import { SelectCurrency } from '../../../projects/myWallet/components/selectCurrency';
import { useProvider } from '../../../src/context/provider';
import { LogInSignIn } from '../../../src/components/logInSignIn';
import { Amount } from '../../../projects/myWallet/components/amount';
import { useWalletProvider, WalletProvider } from '../../../projects/myWallet/context/provider';
import { SelectNationalCurrency } from '../../../projects/myWallet/components/selectNationalCurrency';
import { Transactions } from '../../../projects/myWallet/components/transactions';


export default function MyWallet() {
    const { user } = useProvider();
    return (
        user == null ? <LogInSignIn es={false}/>
        : 
        <>
            <WalletProvider>
                <Head>
                    <title>My Wallet</title>
                    <meta name='description' content='Personal Wallet, useful to manage all the movements of our currencies. Support all national currencies and also all cryptocurrencies.'/>
                </Head>
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
                <SelectNationalCurrency update={false} es={false}/>
                :
                <> 
                    <Box display={{lg: 'flex', md:'none', sm:'none', base:'none'}} w='full' minH='800px' bg={bg}>
                        <MyWalletDesktop />
                    </Box>
                    <Box display={{lg: 'none', md:'flex', sm:'flex', base:'flex'}} w='full' minH='800px' bg={bg}>
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
            <ProjectNavBar title='MyWallet' es={false} />
            <Box h='70px' />
            <Amount />
            <SelectCurrency es={false}/>
            <Divider h='4px' bg={bgDivider}/>
            <Transactions es={false}/>
        </VStack>
    );
};

const MyWalletDesktop = () => {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const bgDivider = useColorModeValue('gray.300', 'gray.600');
    return (
        <VStack bg={bg} w='full' h='full'>
            <ProjectNavBar title='MyWallet' es={false} />
            <Box h='100px'/>
            <HStack w='full' h='full'>
                <Spacer />
                <SelectCurrency es={false}/>
                <Spacer />
                <Amount />
                <Spacer />
                <Box w='10px'/>
            </HStack>
            <Divider h='4px' bg={bgDivider}/>
            <Transactions es={false}/>
        </VStack>
    );
};