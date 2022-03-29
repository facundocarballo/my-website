import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { Button, HStack, Box, Image, Heading } from '@chakra-ui/react';
import { LSProps } from './logInSignIn';
import { useProvider } from '../context/provider';
import { createUserDB, findUser } from '../functions/firebase';

export const GoogleSignInButton = (props: LSProps) => {
    const textES = 'Iniciar Sesión con Google';
    const textEN = 'Sign In With Google';

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const { setUser } = useProvider();

    const handleSignIn = async () => {
        const result = await signInWithPopup(auth, provider);
        const userExist = await findUser(result.user);
        if (!userExist) createUserDB(result.user);
        setUser(result.user);
    };
    return (
        <Button onClick={handleSignIn} variant='signIn' h='full' w='full'>
            <HStack display={{lg: 'flex', md: 'flex', sm: 'none', base: 'none'}} h='30px'>
                <Image
                src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
                alt='GoogleIcon'
                boxSize='25px'
                />
                <Box w='3px' />
                <Heading size='md'>{props.es ? textES : textEN}</Heading>
            </HStack>
            <HStack display={{lg: 'none', md: 'none', sm: 'flex', base: 'flex'}} h='50px'>
                <Image
                src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
                alt='GoogleIcon'
                boxSize='25px'
                />
                <Box w='3px' />
                <Heading size='md'>{props.es ? textES : textEN}</Heading>
            </HStack>
        </Button>
    );
};