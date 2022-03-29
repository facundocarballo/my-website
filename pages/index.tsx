import Head from 'next/head'
import { useColorModeValue, Container, VStack, Divider } from '@chakra-ui/react'
import { theNavBar } from '../src/functions/navbar';
import { NavBar } from '../src/components/navbar'
import { Landing } from '../src/subPages/home/landing';
import { AboutMe } from '../src/subPages/home/aboutMe';
import { Contact } from '../src/subPages/home/contact';
import { Skills } from '../src/subPages/home/skills';
import React from 'react';
import { Footer } from '../src/components/footer';

export default function Home() {

  const bg = useColorModeValue('bgLight', 'bgDark');
  return (
    <VStack bg={bg}>
      <Container maxW='full' p={0} bg={bg} h='5vh'>
      <Head>
            <title>Facundo Carballo</title>
            <meta name="description" content="My name is Facundo Caballero, I'm studying Computer Engineering at UNLaM, Argentina. I love create funtional apps and learn new things."/>
            <meta name='image' content='https://i.ibb.co/3kmQ59f/memoji-guino.webp'/>
      </Head>
      <NavBar props={theNavBar}/>
    </Container>
    <Divider />
    <Landing/>
    <Divider />
    <AboutMe/>
    <Divider />
    <Skills />
    <Divider />
    <Contact/>
    <Divider />
    <Footer />
    </VStack>
  )
}