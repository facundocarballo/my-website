import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Code } from "@chakra-ui/react"
import { Parrafo, Titulo } from "./chakraUI"
import { NavBar } from "../../../src/components/navbar"
import { theNavBarES } from "../../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "../../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>React con Truffle y Ganache</title>
                <meta name="description" content="Truffle Suite nos provee de herramientas muy valiosas para desarrollar aplicaciones descentralizadas. Desde compilar nuestros Smart Contracts, agregarlos a la blockchain de ethereum hasta conectar las funcionalidades de los Smart Contracts con un frontend."/>
                <meta name='image' content='https://i.ibb.co/BrM0Wsx/MINIATURA-ES.png'/>
            </Head>
            <NavBar props={theNavBarES} />
            <Box h='5px'/>
            <Divider />
            <Box h='50px'/>
            <HStack w='full'>
                <Spacer/>
                <Heading size='4xl'>React, Truffle y Ganache</Heading>
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
            <Titulo>Instalación</Titulo>
            <Parrafo>
            Creamos como siempre un proyecto de React, en este caso yo lo estoy haciendo con Next y TypeScript pero funciona exactamente igual si utilizan solamente React o cualquier otro framework de React. Obviamente tendremos que tener instalado Truffle Suite, que nos brinda muchas herramientas para implementar y vincular nuestras Dapps. Luego dentro de la carpeta del proyecto de React recientemente creado inicializamos el proyecto de Truffle. Se crearán carpetas y archivos nuevos, que luego tendremos que modificar. Ahora vamos a utilizar Ganache, una aplicación que corre una blockchain idéntica a Ethereum pero solo dentro de nuestra computadora. Lo que nos ahorrará mucho tiempo a la hora de probar nuestras Aplicaciones Descentralizadas.
            </Parrafo>
            <Box h='10px' />
            <Titulo>Configuración</Titulo>
            <Parrafo>
            Una vez tengamos ya Truffle y Ganache instalado y corriendo en nuestra computadora, pasamos a configurar el proyecto de Truffle. Dentro del archivo truffle-config.js nos encontraremos con todo un archivo comentado, buscamos la sección donde dice development, la descomentamos y nos fijamos en Ganache el puerto en el que está corriendo la Blockchain. Y lo modificamos dentro del archivo. Por último, buscamos la sección de compiladores y descomentamos el apartado de settings, colocamos el optimizador en true y comentamos el environment Version. 
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
            Ahora sí, ya tenemos todo configurado. Vamos a probarlo y comprobar que todo está bien y podemos leer la información de nuestros Smart Contracts. Creamos un simple smart contract que contenga solamente una variable pública llamada name que contiene mi nombre. Todos los contratos deben estar contenidos dentro de la carpeta que creó Truffle llamada contracts.
            </Parrafo>
            <Box h='10px' /> 
            <Code>{code}</Code>
            <Box h='10px' />
            <Titulo>Migrations</Titulo>
            <Parrafo>
            Una vez con nuestro contrato creado, nos dirigimos a la carpeta migrations, y abrimos el único archivo que existe en esa carpeta. En este archivo tendremos que ir colocando todos los Smart Contracts que queramos utilizar. Todos llamándolos y ejecutandolos de la misma forma.
            </Parrafo>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/QYNFJCq/Captura-de-Pantalla-2022-01-16-a-la-s-20-29-14-removebg-preview.png'
            alt='migrations'
            />
            <Box h='10px' />
            <Titulo>Truffle Compile - Migrate</Titulo>
            <Parrafo>
            Una vez tengamos listo el archivo de migrations, compilamos los Smart Contracts utilizando el comando truffle compile. Luego ejecutamos el comando truffle migrate –reset, agregando así los Smart Contracts a la blockchain local de Ganache. Truffle por defecto utilizará la primera cuenta que nos brinda Ganache, por lo que los gastos que produzcan agregar los contratos a la blockchain recaerá en esta cuenta.
            </Parrafo>
            <Box h='10px' />
            <Titulo>Truffle Console</Titulo>
            <Parrafo>
            Ahora sí, pasemos a comprobar si podemos obtener la información de nuestros Smart Contracts utilizando la consola de truffle. Para eso, ejecutamos el comando truffle console. Se nos abrirá una consola que trabaja con JavaScript. Creamos una instancia de nuestro Smart Contract de esta manera, vemos cómo se almacena en la variable todo el contenido de nuestro Smart Contract. Ahora ya podremos acceder a todas las variables y funciones públicas de nuestro Smart Contract. Por lo que almacenamos en una variable el contenido que devuelva name. Y como podemos ver, efectivamente almacenó Facundo, mi nombre como bien habíamos indicado en el Smart Contract.
            </Parrafo>
        </VStack>
    );
};