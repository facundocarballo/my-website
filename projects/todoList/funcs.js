import { async } from '@firebase/util';
import Web3 from 'web3';
import TodoListJSON from '../../build/contracts/TodoList.json';

// Global Variables
const TodoListAddress = '0xe13173ae2Cd5a0AF09eA6FcA4ed6dC156a450709';
const InfuraURL = 'https://kovan.infura.io/v3/df43c4ed8c5e404fa4ac1d4d4becb8d6';
const Contract = require('web3-eth-contract');
Contract.setProvider(InfuraURL);


export const addTask = async (TodoListContract, account, input) => {
    const data = TodoListContract.methods.createTask(input).encodeABI();

    const params = {
        from: account,
        to: TodoListAddress,
        gas: window.web3.utils.toHex(500000), // Gas limit
        gasPrice: window.web3.utils.toHex(window.web3.utils.toWei('2', 'gwei')),
        data: data
    };

    ethereum.request({
        method: 'eth_sendTransaction',
        params: [params]
    }).then((res) => {
        console.log('Transaction Hash: ', res);
    });
};

export const toggleTask = async (TodoListContract, account, id) => {
    const data = TodoListContract.methods.toggleCompleted(id).encodeABI();

    const params = {
        from: account,
        to: TodoListAddress,
        gas: window.web3.utils.toHex(500000), // Gas limit
        gasPrice: window.web3.utils.toHex(window.web3.utils.toWei('2', 'gwei')),
        data: data
    };

    ethereum.request({
        method: 'eth_sendTransaction',
        params: [params]
    }).then((res) => {
        console.log('Transaction Hash: ', res);
    });

};

export const load = async () => {
    await loadWeb3();

    // Get Contracts
    const TodoListContract = new Contract(TodoListJSON.abi, TodoListAddress);

    const account = await web3.eth.getCoinbase();

    const tasks = await loadTasks(TodoListContract, account);

    return { TodoListContract, account, tasks };
};

const loadTasks = async (TodoListContract, account) => {
    const tasksCount = await TodoListContract.methods.tasksCount(account).call();
    const tasks = [];
    for (var i = 0; i < tasksCount; i++) {
        const task = await TodoListContract.methods.tasks(account, i).call();
        tasks.push(task);
    }
    return tasks;
};

const loadWeb3 = async () => {
     // Modern dapp browsers...
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