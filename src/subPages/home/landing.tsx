import {useColorModeValue, Center, Text, VStack, Spacer, HStack, Box, Heading, Image} from '@chakra-ui/react'
import {ContextProps} from '../../props/contextProps'
import React from 'react';

export const Landing = () => {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    });
    return (
        <Box w='full'>
            {/* Desktop */}
            <Box display={{base:'none', sm:'none', md:'flex', lg:'flex'}}>
                <LandingDesktop width={width} height={height} bg={bg}/>
            </Box>
            {/* Mobile */}
            <Box display={{base:'flex', sm:'flex', md:'none', lg:'none'}}>
                <LandingMobile width={width} height={height} bg={bg}/>
            </Box>
        </Box>
    )
    
}

const LandingMobile = ({width, height, bg}: ContextProps) => {
    return (
        <HStack bg={bg} w='full' h={height}>
            <Spacer/>
            <VStack h={height}>
                <Spacer/>
                <Image 
                    boxSize={[175,175,0,0]}
                    src='https://i.ibb.co/M9bN97g/Whats-App-Image-2022-01-16-at-20-46-59-removebg-preview.png'
                    alt='Hello There'
                />
                <Text fontSize={['20px','20px','0px','0px']}>Hello there, I'm</Text>
                <Heading fontSize={['30px','40px','0px','0px']}>Facundo Carballo</Heading>
                {/* <Text fontSize={['20px','20px','0px','0px']}>I want to...</Text> */}
                <Spacer/>
            </VStack>
            <Spacer/>
        </HStack>
    )
}

const LandingDesktop = ({width, height, bg}: ContextProps) => {
    return (
    <HStack bg={bg} w='full' h={height}>
        <Box w='80px'/>
        {/* Aca habia otro codigo y ese codigo esta abajo de todo */}
        <Box>
            <Center>
                <Image 
                boxSize={[0,0,210,275]}
                src='https://i.ibb.co/M9bN97g/Whats-App-Image-2022-01-16-at-20-46-59-removebg-preview.png'
                alt='Hello There'
                />
            </Center>
        </Box>
        <Spacer/>
        <Box>
            <Text fontSize={[0,0,'20px','25px']}>Hello there, I'm</Text>
            <Heading fontSize={[0,0,'47px','75px']}>Facundo Carballo</Heading>
            {/* <Text fontSize={[0,0,'20px','25px']}>I want to...</Text> */}
        </Box>
        <Box w='80px'/>
    </HStack>
    )
}

/*
Antes estaba este codigo
<VStack h='full'>
            <Spacer/>
            <Box w='200px' h='200px' >
                <Center>
                    <Image 
                    boxSize={[0,0,150,175]}
                    src='https://i.ibb.co/bRm7WBG/hello-Moji.webp'
                    alt='Hello There'
                    />
                </Center>
            </Box>
            <Spacer/>
        </VStack>
*/