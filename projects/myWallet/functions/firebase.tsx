import { User } from "firebase/auth";
import { doc, DocumentData, getDoc, setDoc, updateDoc, getDocs, query, collection, limit, orderBy } from "firebase/firestore/lite";
import { db } from '../../../src/functions/firebase';
import { emptyICurrency, ICurrency, ITransaction, IUserWallet } from "../interfaces";
import { getToUSD } from "./crypto";
import { getToUSDvalue } from "./currencies";


export const getAllTransactions = async (user: User): Promise<ITransaction[]> => {
    const path = `Users/${user.uid}/myWallet/Currencies`
    const collectionRef = collection(db, path, 'Transactions');
    const q = query(collectionRef, orderBy('cmp', 'desc'), limit(100));
    const documents = await getDocs(q);
    const transactions: ITransaction[] = [];
    documents.docs.map((doc) => {
        const data = doc.data();
        const currency = data['currency'];
        const amount = data['amount'];
        const date = data['date'];
        const info = data['info'];
        const profit = data['profit'];
        const transaction: ITransaction = {
            currency: currency,
            amount: amount,
            date: date,
            info: info,
            profit: profit
        };
        transactions.push(transaction);
    });

    return transactions;
}

export const getAllCurrencies = async (user: User): Promise<ICurrency[]> => {
    const path = `Users/${user.uid}/myWallet`
    const docRef = doc(db, path, 'Currencies');
    const document = await getDoc(docRef);

    if (!document.exists()) return [emptyICurrency];

    const data:DocumentData = document.data();

    const currenciesSTR: string[] = data['currencies'];
    const currencies: ICurrency[] = [];

    if (currenciesSTR == null || currenciesSTR.length == 0) return [emptyICurrency];

    currenciesSTR.map((cur) => {
        const currency: ICurrency = getCurrencyWithoutToUSD(data, cur);
        currencies.push(currency);
    });

    return currencies;
};

/*
export const getData = async (user: User): Promise<IUserWallet> => {
    const path = `Users/${user.email}/myWallet`
    const docRef = doc(db, path, 'Currencies');
    const document = await getDoc(docRef);


    if (!document.exists()) return null;

    const data:DocumentData = document.data();

    const currenciesString: string[] = data['currencies'];
    var currencies: ICurrency[] = [];

    if (currenciesString != null) {
        currenciesString.map( async (cur) => {
            const currency = await getCurrency(data, cur);
            currencies.push(currency);
        });
    }else {
        const currency: ICurrency = {
            name: '',
            amount: 0,
            toUSD: -1,
            photoURL: '',
            symbol: ''
        };
        currencies.push(currency);
    }

    const theUser: IUserWallet = {
        currencies: currencies,
        user: user
    };
    
    return theUser;
};
*/

// SET & UPDATES

export async function updateCurrentCurrency(user: User, currentCurrency: ICurrency) {
    const path = `Users/${user.uid}/myWallet`;
    const docRef = doc(db, path, 'Currencies');
    await updateDoc(docRef, {
        [currentCurrency.symbol]: {
            'amount': currentCurrency.amount,
            'name': currentCurrency.name,
            'photoURL': currentCurrency.photoURL
        }
    });
}

export async function setTransaction(user: User, transaction: ITransaction) {
    const path = `Users/${user.uid}/myWallet/Currencies/Transactions`;
    const docID = new Date().getTime();
    const docRef = doc(db, path, `${docID}`);
    await setDoc(docRef, {
        'amount': transaction.amount,
        'currency': transaction.currency,
        'info': transaction.info,
        'date': transaction.date,
        'profit': transaction.profit,
        'cmp': docID
    });
}

export async function setNationalCurrency(user: User, nationalCurrency: ICurrency, update: boolean) {
    const path = `Users/${user.uid}/myWallet`;
    const docRef = doc(db, path, 'Currencies');
    update ? await updateDoc(docRef, {
        'nationalCurrency': {
            'amount': nationalCurrency.amount,
            'name': nationalCurrency.name,
        },
    }) :
    await setDoc(docRef, {
        [nationalCurrency.symbol]: {
            'amount': nationalCurrency.amount,
            'name': nationalCurrency.name,
        },
        'currencies': [
            nationalCurrency.symbol
        ],
    });
};

export const setCurrency = async (user: User, currency: ICurrency, currencies: string[], firstTime: boolean) => {
    const path = `Users/${user.uid}/myWallet`;
    const docRef = doc(db, path, 'Currencies');
    firstTime ? await setDoc(docRef, {
        'currencies': currencies,
        [currency.symbol]: {
            'amount': currency.amount,
            'name': currency.name,
            'photoURL': currency.photoURL
        }
    }) :
    await updateDoc(docRef, {
        'currencies': currencies,
        [currency.symbol]: {
            'amount': currency.amount,
            'name': currency.name,
            'photoURL': currency.photoURL
        }
    });
};


// GET'S


async function getCurrency(data: DocumentData, cur: string): Promise<ICurrency> {
    const name = data[cur]['name'];
    const amount = data[cur]['amount'];
    const currency: ICurrency = {
        name: name,
        amount: amount,
        symbol: cur,
        toUSD: await getToUSDvalue(cur),
        photoURL: ''
    };
    return currency;
}

function getCurrencyWithoutToUSD(data: DocumentData, cur: string): ICurrency {
    const currency: ICurrency = {
        name: data[cur]['name'],
        amount: data[cur]['amount'],
        symbol: cur,
        toUSD: -1,
        photoURL: ''
    };
    return currency
}


export async function getNationalCurrency (data: DocumentData): Promise<ICurrency> {
    const amount: number = data['amount'];
    const name: string = data['name'];
    const symbol: string = data['symbol'];
    const toUSD: number = await getToUSDvalue(symbol);

    const nationalCurrency: ICurrency = {
        amount: amount,
        name: name,
        symbol: symbol,
        toUSD: toUSD,
        photoURL: ''
    };

    return nationalCurrency;
}