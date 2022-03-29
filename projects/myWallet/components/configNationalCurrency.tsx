import { Input, Modal, useColorModeValue, FormControl, FormLabel, InputGroup, InputLeftElement, Button, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";
import React from "react";
import { useProvider } from "../../../src/context/provider";
import { useWalletProvider } from "../context/provider";
import { setNationalCurrency } from "../functions/firebase";
import { ICurrency } from "../interfaces";

interface IconfigNC {
    update: boolean,
    es: boolean
};

export const ConfigNationalCurrency = ({update, es}: IconfigNC) => {
    const { userWallet, setShowConfig } = useWalletProvider();
    const bg = useColorModeValue('bgLight', 'bgDark');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = React.useState(userWallet != null ? userWallet.nationalCurrency.name : '');
    const [amount, setAmount] = React.useState(userWallet != null ? userWallet.nationalCurrency.amount : -1);
    const [symbol, setSymbol] = React.useState(userWallet != null ? userWallet.nationalCurrency.symbol : '');
    const [toUSD, setToUSD] = React.useState(userWallet != null ? userWallet.nationalCurrency.toUSD : 0);
    const {user} = useProvider();

    const handleContinue = async () => {
        const nc: ICurrency = {
            name: name,
            amount: amount,
            symbol: symbol,
            toUSD: toUSD,
            photoURL: ''
        };

        await setNationalCurrency(user, nc, update);

        if (update) setShowConfig(false);
    };

    // Las props que podria recibir este componente son:
    // Todas las del modal (useDisclosure)
    // Cada uno de los textos en ES y EN
    // una variable booleana que indique el idioma

    return(
        <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{es ? 'Moneada Nacional' : 'National Currency'}</ModalHeader>
                <ModalBody>
                    <form action='submit'>
                        <FormControl id='nameNationalCurrency'>
                            <FormLabel>{es ? 'Nombre de la Moneada Nacional' : 'National Currency Name'}</FormLabel>
                            <Input
                            type='name'
                            placeholder="USD Dollars"
                            value={name}
                            onChange={ (e) => setName(e.currentTarget.value) }
                            />
                        </FormControl>
                        <FormControl id='symbol'>
                            <FormLabel>{es ? 'Símbolo' : 'Symbol'}</FormLabel>
                            <Input
                            type='name'
                            placeholder="USD"
                            value={symbol}
                            onChange={ (e) => setSymbol(e.currentTarget.value) }
                            />  
                        </FormControl>
                        <FormControl id='amount'>
                            <FormLabel>{es ? 'Monto' : 'Amount'}</FormLabel>
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
                                value={amount}
                                onChange={ (e) => setAmount(Number(e.currentTarget.value)) }
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl id='convertValue'>
                            <FormLabel>{es ? 'Conversion a USD' : 'Convert Value to USD'}</FormLabel>
                            <Input
                            type='number'
                            placeholder="208"
                            value={toUSD}
                            onChange={ (e) => setToUSD(Number(e.currentTarget.value)) }
                            />
                        </FormControl>
                    </form>
                </ModalBody>
                {
                    toUSD != 0 && symbol != '' && name != '' && amount >= 0 ? 
                    <ModalFooter>
                        <Button variant='headers' onClick={handleContinue}>Continue</Button>
                    </ModalFooter> 
                    : null
                }
            </ModalContent>
        </Modal>
    );
};