import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link } from "@chakra-ui/react"
import { Parrafo, Titulo } from "../es/blog/chakraUI"
import { NavBar } from "./../../src/components/navbar"
import { theNavBar } from "./../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "Connect Truffle with a Testnet";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>Connect Truffle with a Testnet</title>
                <meta name="description" content="In this article you will see how to connect truffle with a testnet."/>
                <meta name='image' content='https://i.ibb.co/VVPFTBG/Captura-de-Pantalla-2022-02-14-a-la-s-11-56-03.png'/>
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
    const truffleConfig: string = "First of all we'll have to uncomment the ropsen config. It's a testnet that truffle brings us by default to use, but like I will use kovan I will have to modify some things in this testnet config.";
    const truffleHDWallet: string = "First we will have to get truffle HDWallet installed, this is a truffle tool but doesn’t come with the default tools of truffle. So we have to install it separately. We implement the truffle hd wallet provider in our kovan testnet config like this, you can see how I pass some data inside of the hd wallet provider. This data is necessary to work correctly with our testnet, so now I will explain all of these parameters.";
    const privateKeys: string = "The private keys are just the private keys of our wallets that we will use to deploy and test our Smart Contracts. We create an array of private keys like you can see, and here we will have to paste the private keys of our wallets. To get these private keys we will have to go to metamask or the wallet that you use, and get the private key. Here we see how I set numbersOfAddress on two, but it was only because when I recorded this video I thought that I will have to use two wallets to test and deploy the Smart Contracts, but then I realized that I can set only one wallet.";
    const infura: string = "To connect with our testnet network we will have to have an Infura account, so we create and confirm an Infura account. Then we can create an Infura Project, we have to set the producto on Ethereum, and we can set any name that we want. After that, we can copy the link that Infura provides us, and finally paste it on the providerOrURL variable.";
    const networkID: string = "Finally we have to set the correct network id for the testnet that you will use. In this case I will use the Kovan Testnet. I will search the network id for this testnet. Once we know the correct network id we have to set this number inside of the truffle config file.";
    
    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Titulo>Truffle Config</Titulo>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5xoj4g8RdLI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <Parrafo>{truffleConfig}</Parrafo>
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/gzmJhzf/Captura-de-Pantalla-2022-02-14-a-la-s-11-44-49.png'
            alt='truffleConfig'
            borderRadius={8}
            />
            <Titulo>Truffle HD Wallet</Titulo>
            <Parrafo>{truffleHDWallet}</Parrafo>
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/McXXTf1/Captura-de-Pantalla-2022-02-14-a-la-s-11-47-06.png'
            alt='truffleHDWallet'
            borderRadius={8}
            />
            <Box h='10px' />
            <Titulo>Private Keys</Titulo>
            <Parrafo>{privateKeys}</Parrafo>
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/t855Zg6/Captura-de-Pantalla-2022-02-14-a-la-s-11-49-20.png'
            alt='privateKeys'
            borderRadius={8}
            />
            <Box h='10px' /> 
            <Titulo>Infura</Titulo>
            <Parrafo>{infura}</Parrafo>
            <Titulo>Network ID</Titulo>
            <Parrafo>{networkID}</Parrafo>
            <Box h='10px' />
        </VStack>
    );
};