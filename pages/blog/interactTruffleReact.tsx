import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link } from "@chakra-ui/react"
import { Parrafo, Titulo } from "../es/blog/chakraUI"
import { NavBar } from "./../../src/components/navbar"
import { theNavBar } from "./../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "Interact Smart Contracts with React";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>Interact Smart Contracts with React</title>
                <meta name="description" content="To interact with our Smart Contract using React, we use Truffle Suite that brings us a lot of cool tools that help us to interact with our Smart Contract. Also we will need an extra package of Truffle called, @truffle/contract that brings us a function that we will use to get a JavaScript instance of our Smart Contract."/>
                <meta name='image' content='https://i.ibb.co/KLrbkzb/Captura-de-Pantalla-2022-01-20-a-la-s-14-55-47.png'/>
            </Head>
            <NavBar props={theNavBar} />
            <Box h='5px'/>
            <Divider />
            <Box h='50px'/>
            <HStack w='full'>
                <Spacer/>
                <Heading size='4xl'>{title}</Heading>
                <Spacer/>
            </HStack>
            <InteractTruffleReactContent />
            <Box h='30px' />
            <Footer />
        </VStack>
    ); 
}

const InteractTruffleReactContent = () => {
    const loadWeb3S: string = "The first function that will be in the load function, will be loadWeb3. In this function we will use some code that metamask provides us to connect web3 with this wallet.Of course to that, first you have to have metamask installed. If you don’t have it installed, it’s easy just go to the official website of metamask and we install it.";
    const refresh: string = "We don’t want to call the load function every time that the web site reloads. So to handle that we will create some state variable using another React hook call, useState. So before we call the load function we will ask if we want to get the data. If that isn’t true, just return. But if that is true, first we set the refresh variable to false. And just there we call the load function. Now finally we can try our loadAccount function. Like we see the console print a promise object, and that it’s because I forget to add the await keyword before calling the web3 function. Now if we refresh the web, we can see the current address of the wallet that the user is using.";
    const loadContract: string = "Finally delete the console.log and return the current account. So inside the load function we will have to receive it. Here I made a mistake that then I will resolve. I simply shouldn’t put the curly braces to receive the account address, because I don’t return an object but a simple variable. We continue creating a function that gets an instance of the contract. Here we will need our instance of truffle contract that we defined before. Start creating a variable that stores the value that returns the contract function. To this function we will have to pass the JSON file as a parameter. We continue indicating the web3 provider that we are using, after that we create a variable that stores the content that the function deployed returns.";
    const fix: string = "We test our code, and we will see that I have an error. Maybe you already figured out the error, but I spent a good time trying to figure it out. I had called “contract” to the instance of our Smart Contract, but I also called “contract” to the instance of the truffle contract. So I have to modify one of them. But I have no better idea to name it with the same name as the variable that stores the value that the function of truffle contract returns. After that, I compile the code and the app doesn't work yet. The problem was that I received the address like it was an object, but was a simple variable. Once I modify that, the app runs with success and I can read the data of our Smart Contracts.";

    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Titulo>Use Effect</Titulo>
            <Parrafo>
            First of all to interact with Smart Contracts using React we have to use some React hooks, like useEffect that allows us to execute some code each time that the web site reloads. Inside of this hook we will execute what we will make to get the data from our Smart Contract.
            </Parrafo>
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/fD491qQ/use-Effect.png'
            alt='useEffect'
            borderRadius={8}
            />
            <Titulo>Funcs</Titulo>
            <Parrafo>
            The code that will be here, we will make it on another file, to make it cleaner. In this case I will create a folder called src and inside of it I will create a JS file called func.
            </Parrafo>
            <Box h='10px' />
            <Titulo>Truffle Contract</Titulo>
            <Parrafo>
            To interact with our Smart Contracts we will need to install an extra package called truffle contracts. Once we have installed it, we can start to make this file. I will start importing the JSON file that the migrate made us using the truffle commands. This JSON file has all the data of our Smart Contract but in JSON format. I will continue importing Web3, if you don’t have Web3 installed you can install it using this command npm install web3. Lastly I will create an instance of the package truffle contracts that we installed before.
            </Parrafo>
            <Box h='10px' /> 
            <Titulo>Load</Titulo>
            <Parrafo>
            Now we can create some function that we will use in the useEffect hook. Inside of this function it will execute different functions that we will create.
            </Parrafo>
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/cycT4K1/load.png'
            alt='load'
            borderRadius={8}
            />
            <Titulo>Load Web3</Titulo>
            <Parrafo>{loadWeb3S}</Parrafo>
            <Box h='10px' />
            <Link href="https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8" bg='blue.500' p='8px' borderRadius={8}>Metamask Code</Link>
            <Titulo>Config Metamask</Titulo>
            <Parrafo>
                Now we have config metamask to use with Ganache. First of all we have to see the test networks, so we go to configuration and then to advanced and here we have to enable the show test networks. After that we have to add our own test blockchain that Ganache provides us. To do that we go to configuration and then to networks. Add a new network, and you have to fill the form with this data. You can check if this data is correct in the app of Ganache, but normally this data is the same.
            </Parrafo>
            <Box h='10px' />
            <Titulo>Load Account</Titulo>
            <Parrafo>
            Now with the metamask linked to ganache, we can create the next function that we will use to get the current account that the user uses to interact with the Smart Contract. First I will check that all it’s going well. so I will print on the console the current account of the user. To get this data, we have to call the load function inside of the useEffect Hook. So we import the load function and we call inside of the useEffect hook.
            </Parrafo>
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/kBLvnYD/load-Account.png'
            alt='loadAccount'
            borderRadius={8}
            />
            <Titulo>Refresh (UseEffect)</Titulo>
            <Parrafo>{refresh}</Parrafo>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/CKS7jYP/Refresh2.png'
            alt='refresh'
            borderRadius={8}
            />
            <Image
            src='https://i.ibb.co/59nkpRK/Refresh.png'
            alt='refresh'
            borderRadius={8}
            />
            <Titulo>Add Ganache Accounts to Metamask</Titulo>
            <Parrafo>
            Now like I want to work with Ganache accounts, we have to add these accounts to metamask. In the Ganache App, we click on the key icon and copy the private key. After that in metamask we import an account and we paste our private key and finally import the account. I will do the same with another account of Ganache, to use more than one account to test the Smart Contract. Now if we reload the web, we will see on the console the correct address of our current account. It is the same that ganache app saids.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>Load Contract</Titulo>
            <Parrafo>{loadContract}</Parrafo>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/C10j6wL/load-Contract-removebg-preview.png'
            alt='loadContract'
            borderRadius={8}
            />
            <Titulo>Load Tasks</Titulo>
            <Parrafo>
            Inside of this function I want to get all the tasks that the user has. Like do this inside this function will be a lote of code. I will create another function that returns all the tasks. This new function called loadTasks will receive two parameters, the contract and the address of the current account. First we get the amount of tasks that the user created, using the function that we created in the Smart Contract, called tasksCount. After that, we create an empty array and then using a for loop we start to get the instance of each unique task of the user; we can get the entire task because we use the mapping function that we created in the Smart Contract. After that, we push the task inside of the array that we created. Later we returned the array of tasks.
            </Parrafo>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/3MhktL6/load-Tasks-removebg-preview.png'
            alt='loadTasks'
            borderRadius={8}
            />
            <Titulo>Receive all in the useEffect</Titulo>
            <Parrafo>
            Now inside of the useEffect hook, to the function load we add the method then where we will receive the object that the load function returns. Here we can interact with the data of our Smart Contract.
            </Parrafo>
            <Box h="10px"/>
            <Image 
            src='https://i.ibb.co/BGh8mRd/all-Use-Effect.png'
            alt='allUseEffect'
            borderRadius={8}
            />
            <Titulo>Fix some issues</Titulo>
            <Parrafo>{fix}</Parrafo>
        </VStack>
    );
};