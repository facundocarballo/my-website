import {Box, VStack, HStack, useColorModeValue, Text, Spacer, Image, Center} from '@chakra-ui/react'
import {ContextProps} from '../../props/contextProps'
import React from 'react'

export const AboutMe = () => {
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
                <AboutDesktop width={width} height={height} bg={bg}/>
            </Box>
            {/* Mobile */}
            <Box display={{base:'flex', sm:'flex', md:'none', lg:'none'}}>
                <AboutMobile width={width} height={height} bg={bg}/>
            </Box>  
        </Box>
    )
}

const AboutDesktop = ({width, height, bg}: ContextProps) => {
    return (
        <HStack bg={bg} width={width} height={height / 2}>
            <Box w='80px'/>
            <Box maxW={width / 3}>
                <Text fontSize={[0,0,'20px','25px']} textAlign='justify'>
                    Actualmente estudio Ingenieria Informatica en la Universidad de La Matanza. En mis tiempos libres me gusta aprender cosas nuevas sobre el desarrollo de software, las cuales intento implementar creando aplicaciones funcionales.
                </Text>
            </Box>
            <Spacer/>
            <Image 
                boxSize={[0,0,210,275]}
                src='https://i.ibb.co/ZKddNF1/likeMoji.webp'
                alt='Hello There'
            />
            <Box w='80px'/>
        </HStack>
    )
}

const AboutMobile = ({width, height, bg}: ContextProps) => {
    return (
        <HStack width={width}  bg={bg} minH='500px'>
            <Spacer/>
            <VStack>
                <Spacer/>
                <HStack>
                    <Spacer/>
                    <Text fontSize={['20px','20px','0px','0px']} textAlign='justify'>
                        Actualmente estudio Ingenieria Informatica en la Universidad de La Matanza. En mis tiempos libres me gusta aprender cosas nuevas sobre el desarrollo de software, las cuales intento implementar creando aplicaciones funcionales.
                    </Text>
                    <Spacer/>
                </HStack>
                <Image 
                boxSize={[175,175,150,175]}
                src='https://i.ibb.co/ZKddNF1/likeMoji.webp'
                alt='Hello There'
                />
                <Spacer/>
            </VStack>
            <Spacer/>
        </HStack>
    )
}