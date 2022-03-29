import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link } from "@chakra-ui/react"
import { Parrafo, Titulo } from "../blog/chakraUI"
import { NavBar } from "./../../../src/components/navbar"
import { theNavBarES } from "./../../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "Funciones Mapping";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>Funciones Mapping</title>
                <meta name="description" content="Las funciones de tipo mapping son funciones que recibirán siempre un parámetro que funcionará como clave para poder identificar el valor asociado a esta clave."/>
                <meta name='image' content='https://i.ibb.co/YNqLq7k/Captura-de-Pantalla-2022-01-22-a-la-s-20-45-32.png'/>
            </Head>
            <NavBar props={theNavBarES} />
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
    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/LZstj1W/Captura-de-Pantalla-2022-01-22-a-la-s-20-54-11.png'
            alt='mp1'
            borderRadius={8}
            />
            <Parrafo>
            Las funciones de tipo mapping son funciones que recibirán siempre un parámetro que funcionará como clave para poder identificar el valor asociado a esta clave. Uno puede tanto asignarle un valor a la función mapping como también obtener el valor.
            </Parrafo>
            <Box h='10px'/>
            <Image 
            src='https://i.ibb.co/CKtwfC3/Captura-de-Pantalla-2022-01-22-a-la-s-20-54-41.png'
            alt='mp1'
            borderRadius={8}
            />
            <Parrafo>
            Las funciones mapping se pueden enlazar entre sí formando así complejas funciones mapping, pero la idea sigue siendo la misma. Cada función mapping representa a un elemento que funciona como clave y contiene un único elemento por clave.
            </Parrafo>
        </VStack>
    );
};