import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link } from "@chakra-ui/react"
import { Parrafo, Titulo } from "../../es/blog/chakraUI"
import { NavBar } from "./../../../src/components/navbar"
import { theNavBar } from "./../../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "Connect Truffle with a Testnet";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>Conecta Truffle con una Testnet</title>
                <meta name="description" content="En este articulo vas a ver como conectar Truffle con una testnet."/>
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
    const truffleConfig: string = "Primero que nada descomentamos el apartado de Ropsten dentro del archivo truffleConfig.js . Ropsten es una testnet de Ethereum y Truffle nos brinda en este archivo una especie de configuracion por defecto para orientarnos a ver como lo tendriamos que hacer nosotros.";
    const truffleHDWallet: string = "Ahora vamos a utilizar una billetera para interactuar con los Smart Contracts dentro de la testnet. Para eso vamos a utilizar TruffleHDWWallet. Necesitamos instalarlo primero porque no viene instalado de una con Truffle. Luego, creamos una instacia exactamennte igual a como lo ven en la imagen.";
    const privateKeys: string = "La constante de claves privadas contiene simplemente las claves privadas de las cuentas que vamos a utilizar para interactuar con nuestros Smart Contracts (Desplegar nuestro Smart Contract).";
    const infura: string = "Para conectar nuestra aplicacion con una testnet, vamos a tener que utilizar un nodo de infura para acceder a esta testnet. Para eso, van a tener que crearse una cuenta de Infura, luego un proyecto y pegar aca la URL que nos brinda Infura.";
    const networkID: string = "Finalmente, vamos a tener que colocar el ID de la testnet en cuestion. Como yo en este caso voy a utilizar Kovan, el ID es 42.";
    
    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Titulo>Truffle Config</Titulo>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jjpce__kYUo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/cycT4K1/load.png'
            alt='load'
            borderRadius={8}
            />
            <Titulo>Network ID</Titulo>
            <Parrafo>{networkID}</Parrafo>
            <Box h='10px' />
        </VStack>
    );
};