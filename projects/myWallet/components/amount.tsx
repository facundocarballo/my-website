import React from "react";
import { HStack, Button, Heading, Box, Spacer, Spinner } from "@chakra-ui/react";
import { useWalletProvider } from "../context/provider";
import { getToUSDvalue } from "../functions/currencies";

export const Amount = () => {

    const { currentCurrency, setCurrentCurrency } = useWalletProvider();
    const [aux, setAux] = React.useState(false);
    const [showUSD, setShowUSD] = React.useState(true);
    const [showNC, setShowNC] = React.useState(false);

    const handleToUSD = async () => {
        if (currentCurrency.toUSD == -1) {
            const toUSD: number = await getToUSDvalue(currentCurrency.symbol);
            currentCurrency.toUSD = toUSD;
            setCurrentCurrency(currentCurrency);
        }
    };
    

    React.useEffect(() => {
        setAux(true);
        handleToUSD();
    }, []);

    const showAmount = (): string => {
        if (showUSD) {
            const ncTOusd = currentCurrency.amount / currentCurrency.toUSD;
            return `$ ${ncTOusd.toFixed(2)}`;
        }
        return `$ ${currentCurrency.amount}`;
    };
    const handleShowUSD = () => {
        setShowUSD(true);
        setShowNC(false)
    };
    const handleShowNC = () => {
        setShowUSD(false);
        setShowNC(true);
    };
    return(
        !aux ? <Spinner /> :
        <>
            <Box display={{lg: 'flex', md:'flex', sm:'none', base:'none'}}>
                 <HStack h='100px'>
                    <Button h='50px' variant={showUSD ? 'buttonWalletSelect' : 'buttonWallet'} onClick={handleShowUSD}>
                        <Heading size='md'>USD</Heading>
                    </Button>
                    <Button h='50px' variant={showNC ? 'buttonWalletSelect' : 'buttonWallet'} onClick={handleShowNC}>
                        <Heading size='sm'>{currentCurrency.name}</Heading>
                    </Button>
                    <Spacer />
                    <Heading>{showAmount()}</Heading>
                    <Spacer />
                 </HStack>
             </Box>
             <Box display={{lg: 'none', md:'none', sm:'flex', base:'flex'}}>
                 <HStack h='100px'>
                    <Button h='50px' variant={showUSD ? 'buttonWalletSelect' : 'buttonWallet'} onClick={handleShowUSD} fontSize='10px'>
                        <Heading size='md'>USD</Heading>
                    </Button>
                    <Button h='50px' variant={showNC ? 'buttonWalletSelect' : 'buttonWallet'} onClick={handleShowNC} fontSize='10px'>
                        <Heading size='sm'>{currentCurrency.name}</Heading>
                    </Button>
                    <Spacer />
                    <Heading size='md'>{showAmount()}</Heading>
                    <Spacer />
                 </HStack>
             </Box>
        </>
    );
};