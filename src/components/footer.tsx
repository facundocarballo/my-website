import React from 'react';
import { useColorModeValue, useColorMode, Box, HStack, Text, Spacer, VStack } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'
import { ContextProps } from '../props/contextProps';
export const Footer = () => {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    },[]);
    return (
        <Box w='full'>
            {/* Desktop */}
            <Box display={{base:'none', sm:'flex', md:'flex', lg:'flex'}}>
                <FooterDesktop width={width} height={height} bg={bg}/>
            </Box>
            {/* Mobile */}
            <Box display={{base:'flex', sm:'none', md:'none', lg:'none'}}>
                <FooterMobile width={width} height={height} bg={bg}/>
            </Box>
        </Box>
    )
}

const FooterMobile = ({width, height, bg}) => {
    const year = new Date().getFullYear();
    const {colorMode} = useColorMode();
    const isDark = ('dark' === colorMode);
    const stylesButtonsFooter : React.CSSProperties = {
        height: '30px', width: '30px'
    };
    return (
        <VStack>
            <HStack w='full'>
                <Box w='10px'/>
                <Text>©{year} Facundo Carballo.</Text>
                <Spacer/>
                <Text>All rights reserved.</Text>
            </HStack>
            <HStack w='full'>
                <Box w='10px'/>
                <SocialIcon url ="https://instagram.com/facundocarballo_" style={stylesButtonsFooter} target='_blank'/>
                <SocialIcon url="https://www.youtube.com/channel/UCsHoGhGuLYu4_t_4qF4cZmw" style={stylesButtonsFooter} target='_blank'/>
                {
                    isDark ? <SocialIcon url="https://github.com/facundocarballo" style={stylesButtonsFooter} bgColor='#EDF2F7' target='_blank'/>
                    : <SocialIcon url="https://github.com/facundocarballo" style={stylesButtonsFooter} target='_blank'/>
                }
                <Spacer/>
            </HStack>
            <Box h='10px'/>
        </VStack>
    )
}

const FooterDesktop = ({width, height, bg}: ContextProps) => {
    const year = new Date().getFullYear();
    const {colorMode} = useColorMode();
    const isDark = ('dark' === colorMode);
    const stylesButtonsFooter : React.CSSProperties = {
        height: '30px', width: '30px', 
    };
    return (
        <HStack w='full' bg={bg} margin='5px'>
            <Spacer/>
            <Text>©{year} Facundo Carballo.</Text>
            <Spacer/>
            <Text>All rights reserved.</Text>
            <Spacer />
            <SocialIcon url="https://instagram.com/facundocarballo_" style={stylesButtonsFooter} />
            <SocialIcon url="https://www.youtube.com/channel/UCsHoGhGuLYu4_t_4qF4cZmw" style={stylesButtonsFooter}/>
            {
                isDark ? <SocialIcon url="https://github.com/facundocarballo" style={stylesButtonsFooter} bgColor='#EDF2F7'/>
                : <SocialIcon url="https://github.com/facundocarballo" style={stylesButtonsFooter} />
            }
            <Spacer/>
        </HStack>
    )
}