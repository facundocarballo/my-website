import React from 'react'
import { HStack, Spacer, Heading, Image, Button, useColorModeValue, useColorMode, useDisclosure, IconButton, Container, Box, Collapse, Stack, Avatar } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { getAuth, signOut } from 'firebase/auth'
import { useProvider } from '../context/provider'

export interface IProjectNavBar {
    title: string,
    es: boolean
};

export const ProjectNavBar = (props: IProjectNavBar) => {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === 'dark';
    const auth = getAuth();
    const { setUser, user } = useProvider();
    const {isOpen, onToggle} = useDisclosure();
    const handleSignOut = async () => {
        await signOut(auth);
        setUser(null);
    };
    return(
        <Container maxW='100%' p={4} style={{position:'fixed', zIndex: 100}} bg={bg}>
            <HStack>
                <NextLink href='/'>
                    <Image
                    boxSize="50px"
                    src='https://i.ibb.co/3kmQ59f/memoji-guino.webp'
                    alt="Facundo Carballo"
                    />
                </NextLink>
                { props.title != '' ? <Title title={props.title}/> : null }
                <Spacer/>
                <Box display={{lg: 'flex', md: 'none', sm: 'none', base: 'none'}}>
                    {
                        user.photoURL != null ?
                        <Image
                        src={user.photoURL}
                        alt='userPhoto'
                        borderRadius='full'
                        boxSize='50px'
                        />
                        :
                        <Avatar
                        name={user.displayName}
                        />
                    }
                    <Button variant='headers' onClick={handleSignOut}>{ props.es ? 'Cerrar Sesión' : 'LogOut' }</Button>
                </Box>
                <Button onClick={toggleColorMode} variant='headers'>
                {
                    colorMode === 'dark' 
                    ? <SunIcon/> : <MoonIcon/>
                }
                </Button>
                <Box display={{lg: 'none', md:'flex', sm:'flex'}}>
                    <IconButton
                    onClick={onToggle}
                    icon = {isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>}
                    variant = 'headers'
                    aria-label={'Toggle Navigation'}
                    />
                </Box>
            </HStack>
            <Collapse in={isOpen} animateOpacity>
                <Stack
                bg={isDark ? 'bgDark' : 'bgLight'}
                p={4}
                >
                    {
                        user.photoURL != null ?
                        <Image
                        src={user.photoURL}
                        alt='userPhoto'
                        borderRadius='full'
                        boxSize='50px'
                        />
                        :
                        <Avatar
                        name={user.displayName}
                        />
                    }
                    <Button variant='headers' onClick={handleSignOut}>{ props.es ? 'Cerrar Sesión' : 'LogOut' }</Button>
                </Stack>
            </Collapse>
        </Container>
    );
};



const Title = (props) => {
    return (
        <HStack>
            <Container maxW='2em'/>
            <Heading as='h1' fontSize={{base: '4xl', sm: '4xl', md: '4xl'}}>
                {props.title}
            </Heading>
        </HStack>
    )
}