import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Code } from "@chakra-ui/react"
import { Parrafo, Titulo } from "../es/blog/chakraUI"
import { NavBar } from "./../../src/components/navbar"
import { theNavBar } from "./../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "React, Truffle & Ganache";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>React with Truffle and Ganache</title>
                <meta name="description" content="Truffle Suite brings us a lot of cool tools to work with Smart Contracts and the Ethereum Blockchain. Since compiling your Smart Contracts, deploying it on the Blockchain until connect the Smart Contracts to a frontend."/>
                <meta name='image' content='https://i.ibb.co/BrM0Wsx/MINIATURA-EN.png'/>
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
            <TruffleReactContent />
            <Box h='30px' />
            <Footer />
        </VStack>
    ); 
}

const TruffleReactContent = () => {
    const code: string = `string public name = "Facundo";`;
    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Titulo>Instalation</Titulo>
            <Parrafo>
            Like always creating a React project, in this case I’m using Next and TypeScript for this project but if you use a different framework or use JavaScript it will work the same as mine. Obviously we will have to install Truffle Suite which brings us a lot of cool tools to work with Smart Contracts and the Ethereum Blockchain. Inside of the folder of the React project we will init our new Truffle project. This will create new folders and files that we will modify in the future. Now we will use Ganache, an app that runs a Local Ethereum Blockchain on our computer. That will save a lot of time while we are creating our Dapps.
            </Parrafo>
            <Box h='10px' />
            <Titulo>Config</Titulo>
            <Parrafo>
            Once we have Truffle and Ganache installed and running on our computer, we have to config our truffle project. In the file truffle-config.js we will find an entire file commented, search the development section and uncomment that. Check in Ganache the port this is running on, and we modify the port in the truffle config file. Finally, search the compilers section and uncomment all the settings. Change the optimizer to enable and comment the environment version.
            </Parrafo>
            <Box h='10px' />
            <HStack w='full' display={{lg: 'flex', md: 'flex', sm:'none', base:'none'}}>
                <Spacer />
                <Image
                src='https://i.ibb.co/3B2s9zQ/Captura-de-Pantalla-2022-01-16-a-la-s-20-17-59-removebg-preview.png'
                alt='configDev'
                width='sm'
                />
                <Spacer />
                <Image
                src='https://i.ibb.co/25Cg484/Captura-de-Pantalla-2022-01-16-a-la-s-20-18-16-removebg-preview.png'
                alt='configCompiler'
                width='sm'
                />
                <Spacer />
            </HStack>
            <VStack w='full' display={{lg: 'none', md:'none', sm:'flex', base:'flex'}}>
                <Image
                src='https://i.ibb.co/3B2s9zQ/Captura-de-Pantalla-2022-01-16-a-la-s-20-17-59-removebg-preview.png'
                alt='configDev'
                width='sm'
                />
                <Image
                src='https://i.ibb.co/25Cg484/Captura-de-Pantalla-2022-01-16-a-la-s-20-18-16-removebg-preview.png'
                alt='configCompiler'
                width='sm'
                />
            </VStack>
            <Titulo>Simple Smart Contract</Titulo>
            <Parrafo>
            Now that we have all the config done, we can create some simple Smart Contract to check that truffle it’s working and we can talk with our Smart Contracts. All the contracts that we will create have to be inside of this folder called contracts. We create the most simple Smart Contract ever, just have a simple public string variable that contains my name.
            </Parrafo>
            <Box h='10px' /> 
            <Code>{code}</Code>
            <Box h='10px' />
            <Titulo>Migrations</Titulo>
            <Parrafo>
            Once we have our Smart Contract created, we open the migrations folder and we open the only file inside of this folder. In this file we will have to add all of the Smart Contracts that we want to use. All called and executed in the same way.
            </Parrafo>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/QYNFJCq/Captura-de-Pantalla-2022-01-16-a-la-s-20-29-14-removebg-preview.png'
            alt='migrations'
            />
            <Box h='10px' />
            <Titulo>Truffle Compile - Migrate</Titulo>
            <Parrafo>
            With the migrations file done, we can compile our Smart Contract using the commando truffle compile. After that we execute another command truffle migrate –reset, adding the Smart Contracts to the Local Ethereum Blockchain that Ganache provides us. Truffle by default will use the first account on Ganache, therefore this account will charge all the cost that deploy this contract generates.
            </Parrafo>
            <Box h='10px' />
            <Titulo>Truffle Console</Titulo>
            <Parrafo>
            Finally, we can check if all of this works. To do that, we will use the truffle console. It’s a JavaScript console. We create an instance of our Smart Contract like this, we can see how it stores all the content of our Smart Contract. Now we have access to all the public variables and functions of our Smart Contract. Therefore we can store in a variable the content that returns the public function name. In that way we can see how effectively we store “Facundo” , my name, that we have indicated in our Smart Contract.
            </Parrafo>
        </VStack>
    );
};