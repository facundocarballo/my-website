import { Button } from '@chakra-ui/react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { MouseEventHandler } from 'react';
import { useProvider } from '../context/provider';

export interface LoginButtonProps {
    text: string,
    email: string,
    password: string,
    func: MouseEventHandler<HTMLButtonElement>
};

export const SignInButton = ({text, email, password, func}: LoginButtonProps) => {
    const { setUser } = useProvider();
    const auth = getAuth();
    
    return(
        <Button variant='callToAction' onClick={func}>{text}</Button>
    );
};