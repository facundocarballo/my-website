import React from 'react';
import Head from 'next/head';
import { NavBar } from '../../../src/components/navbar';
import { theNavBarES } from '../../../src/functions/navbar';
import { FilterNav, FilterProps } from '../../../src/components/filterNav';
import { CardInfoES } from '../../../src/components/cardInfoEs';
import { Footer } from '../../../src/components/footer';
import { useProvider } from '../../../src/context/provider'
import {VStack, useColorModeValue, Divider, Box } from '@chakra-ui/react';


export default function Blog() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const isBlog: FilterProps = {isBlog: true, es: true};
    const {blogs, setBlogs} = useProvider();
    return (
        <VStack w='full' bg={bg} minH='800px'>
            <Head>
                <title>Facundo Carballo - Blog</title>
                <meta name="description" content="Todos los blogs de Facundo Carballo, paso a paso."/>
                <meta name='image' content='https://i.ibb.co/3kmQ59f/memoji-guino.webp'/>
            </Head>
            <NavBar props={theNavBarES} />
            <Divider />
            <Box h='60px' />
            <FilterNav {...isBlog} />
            <Box h='10px' />
            <CardInfoES {...blogs}/>
            <Box h='20px'/>
            <Divider />
            <Footer />
        </VStack>
    );
}