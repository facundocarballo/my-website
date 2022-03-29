import Web3 from 'web3';
import FacuTokenJSON from '../../build/contracts/FacuToken.json';
import FacuTokenSaleJSON from '../../build/contracts/FacuTokenSale.json';

// Global Variables
const FacuTokenAddress = '0xbc0484ab69982738bcd5fa45947fc9203551bb7c';
const FacuTokenSaleAddress = '0x5be58038e21bfe44ea92d1f1fff43920de3ede26';
const InfuraURL = 'https://kovan.infura.io/v3/df43c4ed8c5e404fa4ac1d4d4becb8d6';
const Contract = require('web3-eth-contract');
Contract.setProvider(InfuraURL);


export const buyToken = async (inputValue, account, ethPrice, contractFTS) => {
    const big = BigInt(inputValue * 10**18);
    const eth = inputValue * (50 / ethPrice) * 10**18;
    const data = contractFTS.methods.buyToken(big).encodeABI();

    // Asi hacemos una transaccion con ETH usando metamask.
    const params = {
        from: account,
        to: FacuTokenSaleAddress,
        gas: window.web3.utils.toHex(500000), // Gas limit
        gasPrice: window.web3.utils.toHex(window.web3.utils.toWei('2', 'gwei')),
        value: window.web3.utils.toHex(eth),
        data: data
    };

    // Para que funcione segun la documentacion, tengo que usar 
    // Pero no puedo hacerlo porque no dispongo de las claves privadas de mis cuentas
    
    ethereum.request({
        method: 'eth_sendTransaction',
        params: [params]
    }).then((res) => {
        console.log('Transaction Hash: ', res);
     });

};

export const load2 = async () => {
    await loadWeb3();

    // Get Contracts
    const facuTokenContract = new Contract(FacuTokenJSON.abi, FacuTokenAddress);
    const facuTokenSaleContract = new Contract(FacuTokenSaleJSON.abi, FacuTokenSaleAddress);

    // Get Account
    const account = await loadAccount();

    // Get Balance
    const balance = await facuTokenContract.methods.balanceOf(account).call();
    const myFT = balance / 10**18;

    // Get Variables
    const { ethFunds, transactionCount, tokensSold, ethPrice, transactions } = await loadVariables(facuTokenSaleContract);


    return { account, facuTokenContract, facuTokenSaleContract, myFT, ethFunds, transactionCount, tokensSold, ethPrice, transactions };

};

const loadVariables = async (facuTokenSaleContract) => {
    const admin = "0xD35c657500a074A03E367d8EC2f939fada73f839";
    const ethFunds = await window.web3.eth.getBalance(admin);

    const transactionCount = await facuTokenSaleContract.methods.transactionCount().call();

    const tSold = await facuTokenSaleContract.methods.tokensSold().call();
    const tokensSold = window.web3.utils.fromWei(tSold, 'ether');

    const ethPrice = await facuTokenSaleContract.methods.getETHPrice().call();

    // Make this strange for loop to get the last 10 transactions.
    const transactions = [];
    var j = 0;
    for (var i = transactionCount - 1; i >= 0 && j < 10; i--) {
        const t = await facuTokenSaleContract.methods.transaction(i).call();
        j++;
        transactions.push(t);
    }

    return { ethFunds, transactionCount, tokensSold, ethPrice, transactions };
};

const loadAccount = async () => {
    const account = await window.web3.eth.getCoinbase();
    return account;
};


const loadWeb3 = async() => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
};