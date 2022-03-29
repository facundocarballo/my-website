import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link, Button } from "@chakra-ui/react"
import { Parrafo, Titulo } from "../../es/blog/chakraUI"
import { NavBar } from "../../../src/components/navbar"
import { theNavBar } from "../../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "../../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "Crea un perfil profesional de GitHub";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>Crea un perfil profesional de GitHub</title>
                <meta name="description" content="En este articulo veremos como crear un perfil profesional de GitHub"/>
                <meta name='image' content='https://i.ibb.co/p1h1f4q/Captura-de-Pantalla-2022-02-14-a-la-s-13-01-17.png'/>
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
    const GitHub: string = "Primero, creamos un repositorio con nuestro nombre de usuario. Luego miramos algunos perfiles de otros desarrolladores. Creamos un banner dentro de figma que luego pondremos dento de nuestor GitHub Readme Profile. Agregamos algo de texto a nuestro Github Readme Profile, como nuestro nombre, nuestras habilidades y algunos proyectos que hayamos hecho. Finalmente hacemos el commit de nuestro repositorio y vamos a ver ya en nuestro perfil nuestro nuevo GitHub Readme Profile.";
    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Titulo>GitHub Profile</Titulo>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QOxao7gADWM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <Parrafo>{GitHub}</Parrafo>
        </VStack>
    );
};