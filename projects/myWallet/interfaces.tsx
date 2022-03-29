import { User } from "firebase/auth";



export interface ITransaction {
    amount: number,
    currency: string,
    date: string,
    info: string,
    profit: boolean
};

export interface ICurrency {
    name: string,
    symbol: string,
    amount: number,
    toUSD: number,
    photoURL: string
};



export const emptyICurrency:ICurrency = {
    name: '',
    symbol: '',
    amount: 0,
    toUSD: 0,
    photoURL: ''
};


export interface IUserWallet {
    user: User,
    currencies: ICurrency[],
    transactions: ITransaction[]
};

export interface IUserWalletProps {
    props: IUserWallet
};