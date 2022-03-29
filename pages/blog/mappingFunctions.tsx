import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link } from "@chakra-ui/react"
import { Parrafo, Titulo } from "../es/blog/chakraUI"
import { NavBar } from "./../../src/components/navbar"
import { theNavBar } from "./../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "What are Mapping Functions?";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>Mapping Functions</title>
                <meta name="description" content="The mapping functions are simple functions that always will receive some value that will work like the key of an unique value."/>
                <meta name='image' content='https://i.ibb.co/YNqLq7k/Captura-de-Pantalla-2022-01-22-a-la-s-20-45-32.png'/>
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
            <MappingFunctions />
            <Box h='30px' />
            <Footer />
        </VStack>
    ); 
}

const MappingFunctions = () => {
    
    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/LZstj1W/Captura-de-Pantalla-2022-01-22-a-la-s-20-54-11.png'
            alt='mp1'
            borderRadius={8}
            />
            <Parrafo>
            The mapping functions are simple functions that always will receive some value that will work like the key of an unique value. We can set the value for a key, and also we can get the value associated with a key.
            </Parrafo>
            <Box h='10px'/>
            <Image 
            src='https://i.ibb.co/CKtwfC3/Captura-de-Pantalla-2022-01-22-a-la-s-20-54-41.png'
            alt='mp2'
            borderRadius={8}
            />
            <Parrafo>
            The mapping functions can be one inside of the other, but the main concept is the same. Each mapping function will return an unique value associated with a key. This value can be anything, can be an integer, a string, or also another mapping function.
            </Parrafo>
            <Box h='10px'/>
        </VStack>
    );
};