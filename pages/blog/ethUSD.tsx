import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link, Button } from "@chakra-ui/react"
import { Parrafo, Titulo } from "./../es/blog/chakraUI"
import { NavBar } from "./../../src/components/navbar"
import { theNavBar } from "./../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "Get the current price of the ETH";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>ETH / USD</title>
                <meta name="description" content=""/>
                <meta name='image' content='https://i.ibb.co/WvmPw2h/Captura-de-Pantalla-2022-02-14-a-la-s-12-37-18.png'/>
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
    const ethUSD: string = "To create an ICO we will have to have a Smart Contract who handles the sale of tokens. Like I want that in the ICO the token always costs 50 USD, I will have to use some API to get the current price of the ETH. But like using a centralized API will be against the blockchain community we are obligated to use some descentralize API. Fortunately ChainLink provides to the blockchain developers a great API that allows you to get the current price of any cryptocurrency in real time. This isn’t an API, it’s a Smart Contract that stores the current price of the cryptocurrencies, but works like an API. In his documentation ChainLink shows how to implement it. We see that we will have to use the AggregatorV3Interface so we will have to install it,  and then we can use the AggregatorV3Interface to get an instance of the Smart Contract that provides us the current price of the ETH.";
    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Titulo>ETH / USD</Titulo>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gw0yeWLBp6Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            <Button variant='callToAction'>
                <Link href="https://docs.chain.link/docs/get-the-latest-price/" isExternal>ChainLink Docs</Link>
            </Button>
            <Parrafo>{ethUSD}</Parrafo>
        </VStack>
    );
};