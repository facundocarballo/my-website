import axios from 'axios';
import { NATIONS_CURRENCIES } from '../currencies';
import { ICurrency, IUserWallet } from '../interfaces';
import { getCryptoToUSD } from './crypto';
import { API_KEY } from './keys';

const getURLQueryToUSD = () => `https://freecurrencyapi.net/api/v2/latest?apikey=${API_KEY}`;
 
export const getAllNationsCurrencies = ():ICurrency[] => {
    const currencies: ICurrency[] = [];
    NATIONS_CURRENCIES.map((cur) => {
        const currency: ICurrency = {
            name: cur.name,
            symbol: cur.code,
            amount: 0,
            photoURL: '',
            toUSD: -1
        };
        currencies.push(currency);
    });
    return currencies;
};

export const deleteNCDuplicated = (user: IUserWallet, nationalsCurrencies: ICurrency[]):ICurrency[] => {
    const newCurrencies: ICurrency[] = nationalsCurrencies;
    user.currencies.map((cur) => {
        newCurrencies.map((curNC, idx) => {
            if (cur.symbol == curNC.symbol) newCurrencies.splice(idx, 1);
        });
    });

    return newCurrencies;
};

export const getToUSDvalue = async (cur: string): Promise<number> => {
    var flag: boolean = false;
    var toUSD: number = 0;
    NATIONS_CURRENCIES.map((nC) => { 
        if (cur == nC['code']) flag = true; 
    });
    if (flag) {
        const url = getURLQueryToUSD();
        const res = await axios(url);
        if (res.status == 404 || res.status == 429 || res.status == 500) {
            alert('We have problems to get the exchange rates.');
            return -1;
        }
        if (cur == 'USD') return 1;
        const data = res.data;
        toUSD = data['data'][cur];
        console.log(`toUSD: $ ${toUSD}`);
        return toUSD;
    }else {
        // ES UNA CRYPTO
        toUSD = await getCryptoToUSD(cur);
        return toUSD
    }
    
};


