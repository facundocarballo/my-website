import React from 'react';
import Head from 'next/head';
import { VStack, Box, useColorModeValue, Divider, Spacer } from '@chakra-ui/react';
import { FilterProps } from '../../src/components/filterNav';
import { Footer } from '../../src/components/footer';
import { CardInfo } from '../../src/components/cardInfo';
import {theNavBar} from '../../src/functions/navbar';
import { NavBar } from '../../src/components/navbar';
import { useProvider } from '../../src/context/provider';
import { LogInSignIn } from '../../src/components/logInSignIn';
import { FilterNavProjects } from '../../src/components/filterNavProjects';



export default function Projects() {
    // Los proyectos reales que vaya creando en el blog tienen que ir a parar al Context.
  const { projects, user } = useProvider();
  const isBlog : FilterProps = { isBlog: false, es: false };
  const bg = useColorModeValue('bgLight', 'bgDark');
    return (
            user != null ?
            <VStack w='full' bg={bg} minH='800px'>
                <Head>
                    <title>Facundo Carballo - Projects</title>
                    <meta name="description" content="Completed Projects of Flutter, Swift or React."/>
                </Head>
                <NavBar props={theNavBar} />
                <Divider />
                <Box h='60px' />
                <FilterNavProjects {...isBlog} />
                <Box h='10px' />
                <CardInfo {...projects} />
                <Spacer />
                <Divider />
                <Footer />
            </VStack>
            :
            <LogInSignIn es={false} />
        
        
    )
}
