import React from 'react';
import Head from 'next/head';
import { NavBar } from '../../src/components/navbar';
import { theNavBar } from '../../src/functions/navbar';
import { FilterNav, FilterProps } from '../../src/components/filterNav';
import { CardInfo } from '../../src/components/cardInfo';
import { Footer } from '../../src/components/footer';
import { useProvider } from '../../src/context/provider'
import {VStack, useColorModeValue, Divider, Box, Spacer } from '@chakra-ui/react';


export default function Blog() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const isBlog: FilterProps = {isBlog: true, es: false};
    const {blogs, setBlogs} = useProvider();
    return (
        <VStack w='full' bg={bg} minH='800px'>
            <Head>
                <title>Facundo Carballo - Blog</title>
                <meta name="description" content="All Facundo Carballo blogs, step by step."/>
                <meta name='image' content='https://i.ibb.co/3kmQ59f/memoji-guino.webp'/>
            </Head>
            <NavBar props={theNavBar} />
            <Divider />
            <Box h='60px' />
            <FilterNav {...isBlog} />
            <Box h='10px' />
            <CardInfo {...blogs}/>
            <Spacer />
            <Divider />
            <Footer />
        </VStack>
    );
}