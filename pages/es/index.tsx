import Head from 'next/head'
import {useColorModeValue, Container, VStack, Divider,} from '@chakra-ui/react'
import { theNavBarES } from '../../src/functions/navbar';
import { NavBar } from '../../src/components/navbar'
import { Landing } from '../../src/subPages/inicio/landing';
import { AboutMe } from '../../src/subPages/inicio/aboutMe';
import { Contact } from '../../src/subPages/inicio/contact';
import { Skills } from '../../src/subPages/inicio/skills';
import React from 'react';
import { Footer } from '../../src/components/footer';
import { MoreAboutMe } from '../../src/subPages/inicio/moreAboutMe';

export default function Home() {

  const bg = useColorModeValue('bgLight', 'bgDark');
  return (
      <VStack bg={bg}>
      <Container maxW='full' p={0} bg={bg} h='5vh'>
      <Head>
            <title>Facundo Carballo</title>
            <meta name="description" content="Mi nombre es Facundo Carballo actualmente soy estudiante de Ingenieria Informatica en la Universidad Nacional de La Matanza, Argentina. Me encanta desarrollar aplicaciones funcionales y aprender cosas nuevas."/>
            <meta name='image' content='https://i.ibb.co/3kmQ59f/memoji-guino.webp'/>
      </Head>
      <NavBar props={theNavBarES}/>
      </Container>
      <Divider />
      <Landing/>
      <Divider />
      <AboutMe/>
      <Divider />
      {/* <Skills /> */}
      <MoreAboutMe />
      <Divider />
      <Contact/>
      <Divider />
      <Footer />
      </VStack>
  )
}
