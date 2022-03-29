import { VStack, HStack, Image, Button, Spacer, Box, Text, Spinner, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { TriangleDownIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { ChangeEvent } from "react";
import { useWalletProvider } from "../context/provider";
import { emptyICurrency, ICurrency, ITransaction, IUserWallet } from "../interfaces";
import { setCurrency, setTransaction, updateCurrentCurrency } from "../functions/firebase";
import { useProvider } from "../../../src/context/provider";
import { getToUSDvalue, deleteNCDuplicated } from "../functions/currencies";
import { deleteCryptoDuplicated } from "../functions/crypto";

interface ISelectCurrency {
    es: boolean
};

export const SelectCurrency = ({es}: ISelectCurrency) => {

    
    const { userWallet, currentCurrency,
         setCurrentCurrency, setUserWallet,
         allCryptoCurrencies, setAllCryptoCurrencies,
          allNationsCurrencies, setAllNationsCurrencies } = useWalletProvider();


    const { user } = useProvider();
    const [ addIsOpen, setAddIsOpen ] = React.useState(false);
    const [ minusIsOpen, setMinusIsOpen ] = React.useState(false);
    const [ addCurIsOpen, setAddCurIsOpen ] = React.useState(false);
    const [ showNationsCurrencies, setShowNationsCurrencies ] = React.useState(true);
    const [ currenciesToShow, setCurrenciesToShow ] = React.useState<ICurrency[]>([]);
    const [ amount, setAmount ] = React.useState(0);
    const [ auxAllCurrencies, setAuxAllCurrencies ] = React.useState(true);
    const [info, setInfo] = React.useState('');


    React.useEffect(() => {

        if (currenciesToShow.length == 0 && allNationsCurrencies.length != 0) {
            setCurrenciesToShow(allNationsCurrencies);
        }

        if (userWallet != null && userWallet.currencies.length > 0 && auxAllCurrencies) {
            // Sacar las nationals currencies usadas y tambien las crypto.
            const cryptoCurrencies = deleteCryptoDuplicated(userWallet, allCryptoCurrencies);
            setAllCryptoCurrencies(cryptoCurrencies);
            
            const nationalsCurrencies = deleteNCDuplicated(userWallet, allNationsCurrencies);
            setAllNationsCurrencies(nationalsCurrencies);

            setAuxAllCurrencies(false);
        }

    });

    const addOnClose = () => setAddIsOpen(false);
    const addCurOnClose = () => setAddCurIsOpen(false);
    const minusOnClose = () => setMinusIsOpen(false);

    const addOnOpen = () => setAddIsOpen(true);
    const addCurOnOpen = () => setAddCurIsOpen(true);
    const minusOnOpen = () => setMinusIsOpen(true);

    const handleAdd = async () => {
        currentCurrency.amount += amount;
        await updateCurrentCurrency(user, currentCurrency);
        const day = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const transaction: ITransaction = {
            currency: currentCurrency.symbol,
            amount: amount,
            profit: true,
            info: info,
            date: `${month}/${day}/${year}`
        };
        setTransaction(user, transaction);
        const newTransactions: ITransaction[] = [transaction]; 
        userWallet.transactions.map((tran) => newTransactions.push(tran)); 
        const newUser: IUserWallet = {
            user: userWallet.user,
            currencies: userWallet.currencies,
            transactions: newTransactions
        };
        setUserWallet(newUser);
        addOnClose();
    };
    const handleMinus = async () => {
        currentCurrency.amount -= amount;
        await updateCurrentCurrency(user, currentCurrency);
        const day = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const transaction: ITransaction = {
            currency: currentCurrency.symbol,
            amount: amount,
            profit: false,
            info: info,
            date: `${month}/${day}/${year}`
        };
        setTransaction(user, transaction);
        const newTransactions: ITransaction[] = [transaction]; 
        userWallet.transactions.map((tran) => newTransactions.push(tran)); 
        const newUser: IUserWallet = {
            user: userWallet.user,
            currencies: userWallet.currencies,
            transactions: newTransactions
        };
       setUserWallet(newUser);
        minusOnClose();
    };
    const handleAddCur = async (cur:ICurrency) => {
        const currenciesSTR: string[] = [];
       
        userWallet.currencies.push(cur);
        setUserWallet(userWallet);
        
        userWallet.currencies.map((cur) => {
            currenciesSTR.push(cur.symbol);
        });

        await setCurrency(userWallet.user, cur, currenciesSTR, false);

        addCurOnClose();
    };

    const handleSelect = async (e) => {
        const symbol: string = e.currentTarget.value;
        const toUSD: number = await getToUSDvalue(symbol);
        userWallet.currencies.map((cur) => {
            if (symbol == cur.symbol) {
                cur.toUSD = toUSD;
                setCurrentCurrency(cur);
            }
        });
    }

    const handleSwichtCurrencies = (show: boolean) => {
        setShowNationsCurrencies(!showNationsCurrencies);
        if (show) {
            setCurrenciesToShow(allNationsCurrencies);
        }else {
            setCurrenciesToShow(allCryptoCurrencies);
        }
    }
    
    const handleSearchCurrency = (cur: string) => {
        var nAC = showNationsCurrencies ? allNationsCurrencies : allCryptoCurrencies;

        if (cur != '') {
            nAC = nAC.filter((currencie:ICurrency) => {
                if (currencie.name.includes(cur) || currencie.symbol.includes(cur))
                    return true;
                return false;
            });
        }

        setCurrenciesToShow(nAC);

    }
    
    return(
        <>
            <Box display={{lg: 'flex', md:'flex', sm:'none', base:'none'}}>
                <HStack w='400px' h='100px' variant='buttonWallet'>
                    <VStack>
                        <Button  variant='addIcon' onClick={addOnOpen}>
                            <AddIcon/>
                        </Button>
                        <Button  onClick={minusOnOpen} variant='minusIcon'>
                            <MinusIcon/>
                        </Button>
                    </VStack>
                    <Select id='currentCurrency' onChange={handleSelect}>
                        {
                            userWallet.currencies.map((cur, idx) => (
                                <option key={idx} value={cur.symbol}>{cur.name}</option>
                            ))
                        }
                    </Select>
                    <Button variant='addCurrency' w='200px' onClick={addCurOnOpen}>
                        {es ? 'Añadir Moneda' : 'Add Currency'}
                    </Button>
                </HStack>
            </Box>
            <Box display={{lg:'none', md:'none', sm:'flex', base:'flex'}}>
            <HStack w='full' h='100px' variant='buttonWallet'>
                    <Box w='5px'/>
                    <VStack>
                        <Button variant='addIcon' onClick={addOnOpen} boxSize='25px'>
                            <AddIcon boxSize='15px' />
                        </Button>
                        <Button onClick={minusOnOpen} boxSize='25px' variant='minusIcon'>
                            <MinusIcon boxSize='15px'/>
                        </Button>
                    </VStack>
                    <Select id='currentCurrency' onChange={handleSelect}>
                        {
                            userWallet.currencies.map((cur, idx) => (
                                <option key={idx} value={cur.symbol}>{cur.name}</option>
                            ))
                        }
                    </Select>
                    <Button w='200px' onClick={addCurOnOpen} variant='addCurrency' >
                        {es ? 'Añadir Moneda' : 'Add Currency'}
                    </Button>
                    <Box w='5px'/>
                </HStack>
            </Box>

            {/* Add */}
            <Modal isOpen={addIsOpen} onClose={addOnClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{es ? 'Añadir Fondos' : 'Add funds'}</ModalHeader>
                    <ModalBody>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'>
                                $
                            </InputLeftElement>
                            <Input
                            type='number'
                            placeholder="4000"
                            onChange={ (e) => setAmount(Number(e.currentTarget.value)) }
                            />
                        </InputGroup>
                        <Box h='10px'/>
                            <Input
                            type='text'
                            placeholder={es ? 'Regalo de mi mama' : '"Gift from my mother'}
                            onChange={ (e) => setInfo(e.currentTarget.value) }
                            />
                        <Box h='10px'/>
                        
                        <Button bg='blue.300' onClick={handleAdd}>{es ? 'Añadir Fondos' : 'Add funds'}</Button>
                        <Box h='10px'/>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* Minus */}

            <Modal isOpen={minusIsOpen} onClose={minusOnClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{es ? 'Extraer Fondos' : 'Spend funds'}</ModalHeader>
                    <ModalBody>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            >
                                $
                            </InputLeftElement>
                            <Input
                            type='number'
                            placeholder="4000"
                            onChange={ (e) => setAmount(Number(e.currentTarget.value)) }
                            />
                        </InputGroup>
                        <Box h='10px'/>
                            <Input
                            type='text'
                            placeholder="Shopping..."
                            onChange={ (e) => setInfo(e.currentTarget.value) }
                            />
                        <Box h='10px'/>
                        {
                            amount < currentCurrency.amount ? 
                            <Button bg='red.300' onClick={handleMinus}>{es ? 'Extraer Fondos' : 'Spend funds'}</Button>
                            : <Text color='red'>No dispones de tantos fondos</Text>
                        }
                        <Box h='10px'/>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* Agregar Moneda */}

            <Modal isOpen={addCurIsOpen} onClose={addCurOnClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{es ? 'Añadir Moneda' : 'Add Currency' }</ModalHeader>
                    <ModalBody>
                        <Box h='5px'/>
                        <HStack h='40px' w='full'>
                            <Button bg={showNationsCurrencies ? 'blue.300' : null } onClick={() => handleSwichtCurrencies(true)  }>{es ? 'Monedas Nacionales' : 'Nations Currency'}</Button>
                            <Spacer />
                            <Button bg={showNationsCurrencies ? null : 'blue.300' } onClick={ () => handleSwichtCurrencies(false)  }>{es ? 'Criptomonedas' : 'Cryptocurrencies'}</Button>
                        </HStack>
                        <Box h='15px'/>
                        <Input
                        type='text'
                        placeholder="BTC"
                        onChange={ (e) => handleSearchCurrency(e.currentTarget.value) }
                        />
                        <Box h='10px'/>
                        {
                            currenciesToShow.map((cur, idx) => 
                                <HStack h='45px' key={idx}>
                                    <Box h='5px'/>
                                    {
                                        cur.photoURL != '' ?
                                        <Image
                                        src={cur.photoURL}
                                        alt={cur.symbol}
                                        boxSize='20px'
                                        /> : null
                                    }
                                    <Button w='full' onClick={ () => handleAddCur(cur) }>{cur.name}</Button>
                                    <Box h='5px'/>
                                </HStack>
                            )
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};