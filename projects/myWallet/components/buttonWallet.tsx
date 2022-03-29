import { AddIcon, ArrowBackIcon, ArrowForwardIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Heading, HStack, IconProps, Spacer, VStack } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

export interface IButtonWallet {
    title: string,
    index: number,
    func: MouseEventHandler<HTMLButtonElement>
};

export const ButtonWallet = (props: IButtonWallet) => {
    // TODO: variant='buttonWallet'
    const bg = props.index == 0 ? 'green.300' : props.index == 1 ? 'red.300' : 'blue.300';
    return(
        <HStack w='400px' h='100px'>
            <Spacer/>
            <Heading>{props.title}</Heading>
            <Spacer/>
            <Button h='100px' bg={bg} onClick={props.func}>
                {
                    props.index == 0 ? 
                        <AddIcon />
                    : props.index == 1 ?
                        <MinusIcon />
                    :   <VStack>
                            <ArrowBackIcon/>
                            <ArrowForwardIcon/>
                        </VStack>
                }
            </Button>
        </HStack>
    );
};