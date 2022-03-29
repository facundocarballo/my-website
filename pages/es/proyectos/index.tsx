import React from 'react';
import Head from 'next/head';
import { VStack, Box, useColorModeValue, Divider, Spacer } from '@chakra-ui/react';
import { Footer } from '../../../src/components/footer';
import { FilterNavProjects } from '../../../src/components/filterNavProjects';
import { theNavBarES } from '../../../src/functions/navbar';
import { NavBar } from '../../../src/components/navbar';
import { useProvider } from '../../../src/context/provider';
import { CardInfoES } from '../../../src/components/cardInfoEs';
import { LogInSignIn } from '../../../src/components/logInSignIn';

export default function Projects() {
    // Los proyectos reales que vaya creando en el blog tienen que ir a parar al Context.

  const { projects, user } = useProvider();
  const isBloog: boolean = false;
  const bg = useColorModeValue('bgLight', 'bgDark');
    return (
        user != null ? 
        <VStack w='full' bg={bg} minH='800px'>
            <Head>
                <title>Facundo Carballo - Proyectos</title>
                <meta name="description" content="Proyectos terminados de React, Flutter y Swift"/>
                <meta name='image' content='https://i.ibb.co/3kmQ59f/memoji-guino.webp'/>
            </Head>
            <NavBar props={theNavBarES} />
            <Divider />
            <Box h='60px' />
            <FilterNavProjects isBlog={isBloog} es={true}/>
            <Box h='10px' />
            <CardInfoES {...projects} />
            <Spacer />
            <Divider />
            <Footer />
        </VStack>
        :
        <LogInSignIn es={true}/>
    )
}