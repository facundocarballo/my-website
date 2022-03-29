import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link, Button } from "@chakra-ui/react"
import { Parrafo, Titulo } from "../../es/blog/chakraUI"
import { NavBar } from "./../../../src/components/navbar"
import { theNavBar } from "./../../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "Get the current price of the ETH";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>ETH / USD</title>
                <meta name="description" content="Obtener el precio actual del ETH en USD. Utilizando un Smart Contract de ChainLink."/>
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
    const ethUSD: string = "Para crear una ICO yo voy a necesitar un Smart Contract que maneje la venta de los tokens. Como tambien quiero que los tokens se vendan a un precio fijo en Dolares, voy a tener que recibir el precio del ETH de alguna especie de API. Pero como utilizar una API seria algo Centralizado, vamos a tener que utilizar un Smart Contract de ChainLink que devuelve los precios actuales de las criptomonedas. Seguimos la documentacion de ChainLink. Instalamos el Contrato / Interface de ChainLink para utilizarlo y seguimos los pasos de la documentacion.";
    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Titulo>ETH / USD</Titulo>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sA0mcuaefc8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <Button variant='callToAction'>
                <Link href="https://docs.chain.link/docs/get-the-latest-price/" isExternal>Documentacion de ChainLink</Link>
            </Button>
            <Parrafo>{ethUSD}</Parrafo>
        </VStack>
    );
};