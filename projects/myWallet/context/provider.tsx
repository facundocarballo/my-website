import React, { useState, useEffect } from 'react';
import { useProvider } from '../../../src/context/provider';
import { getCryptoCurrencies } from '../functions/crypto';
import { getAllNationsCurrencies } from '../functions/currencies';
import { getAllCurrencies, getAllTransactions } from '../functions/firebase';
import { emptyICurrency, ICurrency, ITransaction, IUserWallet } from '../interfaces';

const WalletContext = React.createContext(null);

export const WalletProvider = (props) => {
    const { user } = useProvider();
    const [ userWallet, setUserWallet ] = useState<IUserWallet>(null);
    const [ showConfig, setShowConfig ] = useState<boolean>(false);
    const [ currentCurrency, setCurrentCurrency ] = useState<ICurrency>(emptyICurrency);
    const [ allCryptoCurrencies, setAllCryptoCurrencies ] = useState<ICurrency[]>([]);
    const [ allNationsCurrencies, setAllNationsCurrencies ] = useState<ICurrency[]>([]);
    const [ auxCryptoCurrency, setAuxCryptoCurrency ] = useState<boolean>(true);
    const [ auxUserWallet, setAuxUserWallet ] = useState<boolean>(true);



    const handleGetData = async () => {
            if (auxCryptoCurrency) {
                setAuxCryptoCurrency(false);
                
                var cryptoCurrencies = await getCryptoCurrencies();
                setAllCryptoCurrencies(cryptoCurrencies);

                var nationalsCurrencies = getAllNationsCurrencies();
                setAllNationsCurrencies(nationalsCurrencies);
            }
            
            if (auxUserWallet) {
                setAuxUserWallet(false);
                const currencies: ICurrency[] = await getAllCurrencies(user);
                const transactions: ITransaction[] = await getAllTransactions(user);
                if (currencies != null && currencies[0] != emptyICurrency)
                {
                    const theUser: IUserWallet = {
                        user: user,
                        currencies: currencies,
                        transactions: (transactions != null) ? transactions : []
                    };
                    setCurrentCurrency(currencies[0]);
                    setUserWallet(theUser);
                }else {
                    const theUser: IUserWallet = {
                        user: user,
                        currencies: [emptyICurrency],
                        transactions: (transactions != null) ? transactions : []
                    };
                    setUserWallet(theUser);
                    setShowConfig(true);
                }
            }

    };

    useEffect(() => {
        handleGetData(); 
    },);

    const findSetCurrentCurrency = (symbol: string) => {
        userWallet.currencies.map((cur, idx) => {
            if (cur.symbol == symbol) setCurrentCurrency(cur);
        });
    };

    const values = {userWallet, setUserWallet, showConfig,
         setShowConfig, currentCurrency, setCurrentCurrency, findSetCurrentCurrency,
         allCryptoCurrencies, setAllCryptoCurrencies, allNationsCurrencies, setAllNationsCurrencies
        };
    return <WalletContext.Provider value={values} {...props} />
};

export const useWalletProvider = () => {
    const context = React.useContext(WalletContext);
    if (!context) throw new Error('useWalletProvider debe estar dentro de WalletProvider');
    return context;
};