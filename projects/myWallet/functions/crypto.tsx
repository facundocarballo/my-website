import { ICurrency, IUserWallet } from "../interfaces";
import axios from 'axios';


export async function getCryptoCurrencies(): Promise<ICurrency[]> {
    const cryptoCurrencies: ICurrency[] = [];
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const data = res.data;
    data.map((cur) => {
        const crypto: ICurrency = {
            name: cur['name'],
            amount: 0,
            symbol: cur['symbol'],
            toUSD: (1 / cur['current_price']),
            photoURL: cur['image']
        };
        cryptoCurrencies.push(crypto);
    });

    return cryptoCurrencies;
}

export function getToUSD(cur: ICurrency, cryptos: ICurrency[]): number {
    var toUSD: number = -1;
    cryptos.map((c, idx) => {
        if (c.name == cur.name) 
        {
            toUSD = c.toUSD
        }
    });
    return toUSD;
}

export async function getCryptoToUSD(cur:string): Promise<number> {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const data = res.data;
    var toUSD: number = -1;
    data.map((crypto) => {
        if (cur == crypto['symbol']) 
        {
            toUSD = (1 / crypto['current_price']);
            return toUSD;
        }
    });
    return toUSD;
}

export function deleteCryptoDuplicated(user: IUserWallet, cryptos: ICurrency[]): ICurrency[] {
    var theCryptos: ICurrency[] = cryptos;
    user.currencies.map((cur) => {
        theCryptos.map((crypto, idx) => {
            if (cur.symbol == crypto.symbol) theCryptos.splice(idx, 1);
        });
    });
    return theCryptos;
}

