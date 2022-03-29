import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Button, HStack, Box } from '@chakra-ui/react';
import { useProvider } from '../../../src/context/provider';
import { useWalletProvider } from '../context/provider';
import { NATIONS_CURRENCIES } from '../currencies';
import { getToUSDvalue } from '../functions/currencies';
import { setCurrency, setNationalCurrency } from '../functions/firebase';
import { ICurrency, IUserWallet } from '../interfaces';

interface IconfigNC {
    update: boolean,
    es: boolean
};

export const SelectNationalCurrency = ({es, update}: IconfigNC) => {
    const { showConfig, setShowConfig, userWallet, setUserWallet, setCurrentCurrency } = useWalletProvider();
    const handleNationCurrency = async (cur: any) => {
        setShowConfig(false);
        const symbol: string = cur['code'];
        const name: string = cur['name'];
        const toUSD: number = await getToUSDvalue(symbol);
        const nc: ICurrency = {
            name: name,
            symbol: symbol,
            amount: 0,
            photoURL: '',
            toUSD: toUSD
        };
        if (!update) {
            // Es la primera moneda real.
            const theUser: IUserWallet = {
                user: userWallet.user,
                currencies: [nc],
                transactions: userWallet.transactions
            };
            setUserWallet(theUser);
            setCurrentCurrency(nc);
            await setCurrency(userWallet.user, nc, [nc.symbol], true);
        }else {
            userWallet.currencies.push(nc)
            setUserWallet(userWallet);

            const currenciesString: string[] = [];
            userWallet.currencies.map((cur) =>  currenciesString.push(cur.symbol) );
            
            await setCurrency(userWallet.user, nc, currenciesString, false);
        }
        
    };
    return(
        <Modal isOpen={showConfig} onClose={ () => setShowConfig(false) }>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{es ? 'Moneada Nacional' : 'National Currency'}</ModalHeader>
                <ModalBody>
                    {
                        NATIONS_CURRENCIES.map((cur, idx) => 
                            <HStack key={idx} w='full' h='70px'>
                                <Box h='10px'/>
                                {/* Probamos el async await */}
                                <Button w='full' h='50px' onClick={async () => await handleNationCurrency(cur)}>{cur['name']}</Button>
                                <Box h='10px' />
                            </HStack>
                        )
                    }
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};