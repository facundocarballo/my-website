import React, { ChangeEvent } from 'react';
import { VStack, HStack, Spacer, Text, Heading, Box, FormControl, InputGroup, InputLeftElement, Input, useColorModeValue, InputRightElement, Divider } from "@chakra-ui/react";
import { EmailIcon, ViewIcon, ViewOffIcon, InfoIcon } from '@chakra-ui/icons';
import { GoogleSignInButton } from './googleSignIn';
import { NavBar } from './navbar';
import { theNavBar, theNavBarES } from '../functions/navbar';
import { Footer } from './footer';
import { SignInButton } from './signInButton';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useProvider } from '../context/provider';
import { createUserDB, findUser, firebaseConfig } from '../functions/firebase';
import { initializeApp } from 'firebase/app';
import Head from 'next/head';

export interface LSProps {
    es: boolean
};

export const LogInSignIn = (props: LSProps) => {
    const bg = useColorModeValue('bgLight', 'bgDark');
    return (
        
        <VStack w='full' bg={bg} minH='800px'>
            <Head>
                <title>{props.es ? 'Inciar Sesión - Registro' : 'Login - SignUp'}</title>
                <meta name='description' content='Login/SignUp page'/>
            </Head>
            <NavBar props={ props.es ? theNavBarES : theNavBar } />
            <Spacer />
            <Box display={{lg: 'flex', md: 'flex', sm: 'none', base: 'none'}}>
                <LSDesktop es={props.es}/>
            </Box>
            <Box display={{lg: 'none', md: 'none', sm: 'flex', base: 'flex'}}>
                <LSMobile es={props.es}/>
            </Box>
            <Spacer />
            <Footer />
        </VStack>
    );
};



const LSDesktop = (props: LSProps) => {
    return (
        <VStack w='full' h='full'>
            <Box h='100px'/>
            <HStack w='full' h='300px'>
                <Box w='10px'/>
                <LoginPage es={props.es} />
                <Spacer />
                <Box w='3px' h='300px' bg='gray.500'/>
                <Spacer/>
                <SignPage es={props.es} />
                <Box w='10px'/>
            </HStack>
            <Box h='50px'/>
            <GoogleSignInButton es={props.es} />
            <Box h='50px'/>
            <Spacer />
        </VStack>
    );
};

const LSMobile = (props: LSProps) => {
    const bgDivider = useColorModeValue('gray.400', 'gray.600');
    return (
        <VStack w='full' h='full'>
            <Box h='70px'/>
            <GoogleSignInButton es={props.es}/>
            <Box h='10px'/>
            <LoginPage es={props.es}/>
            <Divider h='4px' w='full' bg={bgDivider}/>
            <Box h='10px' />
            <SignPage es={props.es}/>
            <Box h='10px' />
            <Spacer />
        </VStack>
    );
};

const LoginPage = (props: LSProps) => {

    const bgAlert = useColorModeValue('red.300', 'red.600');

    const loginES = 'Iniciar Sesión';
    const loginEN = 'Login';
    const placeHolderPassES = 'Contraseña';
    const placeHolderPassEN = 'Password';
    const alertTitleES = 'Email o Contraseña Incorrecta!';
    const alertTitleEN = 'Email or Password Wrong';

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [fail, setFail] = React.useState(false);

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); };
    const handlePass = (e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); };


    const regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    const isEmailOK = () => regexEmail.test(email);
    const isPasswordOK = () => password.length > 0;
    
    const showLoginButton = () => {
        if (isEmailOK() && isPasswordOK()) return true;
        return false;
    };

    initializeApp(firebaseConfig);



    const auth = getAuth();
    const { setUser } = useProvider();

    const handleLogin = async () => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
        }catch(error) {
            setFail(true);
        }
        
    };
    
    return (
        <VStack w='full' h='full'>
            <HStack w='full'>
                <Spacer />
                <Heading>{props.es ? loginES : loginEN}</Heading>
                <Spacer />
            </HStack>
            <Box h='10px'/>
                <VStack h='150px'>
                    <Spacer />
                <form action='submit'>
                    <FormControl id='email' isRequired>
                        <InputGroup>
                            <InputLeftElement>
                                <EmailIcon/>
                            </InputLeftElement>
                            <Input 
                            type='email' value={email}
                            onChange={handleEmail}
                            placeholder='Email'
                            size='md'/>
                        </InputGroup>
                    </FormControl>
                    <FormControl id='password' isRequired>
                        <InputGroup>
                            <Input
                            value={password}
                            onChange={handlePass}
                            placeholder={props.es ? placeHolderPassES : placeHolderPassEN}
                            size='md'
                            type={showPassword ? 'text' : 'password'}
                            />
                            <InputRightElement 
                            onClick={ () => setShowPassword(!showPassword) }
                            >
                                { showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </form>
                <Spacer />
                </VStack>
                {
                    fail ?
                    <HStack w='full' h='50px' bg={bgAlert} borderRadius={7}>
                        <Box w='2px'/>
                        <InfoIcon />
                        <Spacer />
                        <Heading size='sm'>{props.es ? alertTitleES : alertTitleEN}</Heading>
                        <Spacer />
                    </HStack>
                    : null
                }
                <Spacer />
                {
                    showLoginButton() ? 
                    <SignInButton
                    text={props.es ? loginES : loginEN}
                    email={email}
                    password={password}
                    func={handleLogin}
                    />
                    :
                    <Text>{props.es ? loginES : loginEN}</Text>
                }
        </VStack>
    );
};

const SignPage = (props: LSProps) => {
    const signES  = 'Regístrarte';
    const signEN  = 'Sign Up';

    const placeHolderPassES = 'Contraseña';
    const placeHolderPassEN = 'Password';

    const placeHolderConfirmPassES = 'Confirmar Contraseña';
    const placeHolderConfirmPassEN = 'Confirm Password';

    const alertTitleES = 'Email o Contraseña Incorrecta!';
    const alertTitleEN = 'Email or Password Wrong';
    // Variables
    
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmNewPassword, setConfirmNewPassword] = React.useState('');
    const [newEmail, setNewEmail] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [ fail, setFail ] = React.useState(false);
    // Handlers
    
    const handleNewEmail = (e: ChangeEvent<HTMLInputElement>) => { setNewEmail(e.target.value); };
    const handleNewPassword = (e: ChangeEvent<HTMLInputElement>) => { setNewPassword(e.target.value); };
    const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => { setConfirmNewPassword(e.target.value); };
    const regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    const isEmailOK = () => regexEmail.test(newEmail);
    const isPasswordOK = () => {
        if (newPassword.length == 0 || confirmNewPassword.length == 0) return false;
        if (newPassword != confirmNewPassword) return false;
        return true;
    };

    const bgAlert = useColorModeValue('red.300', 'red.600');
    const showSignInButton = () => isEmailOK() && isPasswordOK();

    initializeApp(firebaseConfig);



    const auth = getAuth();
    const { setUser } = useProvider();
    const handleSignIn = async () => {
        try {
            const result = await createUserWithEmailAndPassword(auth, newEmail, newPassword);
            setUser(result.user);
            createUserDB(result.user);
        }catch(error) {
            setFail(true);
        }
    };
    return (
        <VStack w='full' h='full'>
                    <HStack w='full'>
                        <Spacer />
                        <Heading>{props.es ? signES : signEN}</Heading>
                        <Spacer />
                    </HStack>
                    <Box h='10px'/>
                    <VStack h='150px'>
                        <Spacer />
                        <form action='submit'>
                            <FormControl id='newEmail' isRequired>
                                <InputGroup>
                                    <InputLeftElement>
                                        <EmailIcon/>
                                    </InputLeftElement>
                                    <Input
                                    value={newEmail}
                                    onChange={handleNewEmail}
                                    placeholder='Email'
                                    size='md'
                                    type='email'
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl id='setPassword' isRequired>
                                <InputGroup>
                                    <Input
                                    value={newPassword}
                                    onChange={handleNewPassword}
                                    placeholder={props.es ? placeHolderPassES : placeHolderPassEN}
                                    size='md'
                                    type={showPassword ? 'text' : 'password'}
                                    />
                                    <InputRightElement
                                    onClick={ () => setShowPassword(!showPassword) }>
                                        { showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl id='confirmPassword' isRequired>
                                <Input
                                value={confirmNewPassword}
                                onChange={handleConfirmPassword}
                                placeholder={props.es ? placeHolderConfirmPassES : placeHolderConfirmPassEN}
                                size='md'
                                type={showPassword ? 'text' : 'password'}
                                />
                            </FormControl>
                        </form>
                    <Spacer />
                    </VStack>
                    {
                    fail ?
                        <HStack w='full' h='50px' bg={bgAlert} borderRadius={7}>
                            <Box w='2px'/>
                            <InfoIcon />
                            <Spacer />
                            <Heading size='sm'>{props.es ? alertTitleES : alertTitleEN}</Heading>
                            <Spacer />
                        </HStack>
                    : null
                }
                    <Spacer />
                    {
                        showSignInButton() ?
                        <SignInButton
                        text={props.es ? signES : signEN}
                        email={newEmail}
                        password={newPassword}
                        func={handleSignIn}
                        />
                        : <Text>{props.es ? signES : signEN}</Text>
                    }
                </VStack>
    );
};