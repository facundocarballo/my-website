import React from 'react';
import {HStack, VStack, Box, Heading, Text, Spacer, Image, Grid, GridItem, Container, useColorModeValue } from "@chakra-ui/react";
import NextLink from 'next/link';

export interface TheCardInfoProps {
    props: CardInfoProps[],
    en?: boolean,
};

export interface CardInfoProps {
    // Multi-Idioma
    frameworkPhotoURL?: string,
    photoURL?: string,
    keyword: string,
    href: string,
    // English
    title?: string,
    date?: string,
    description?: string,
    // Español
    titulo?: string,
    fecha?: string,
    descripcion?: string,
    blog: boolean
    
};

export const emptyCardInfo: TheCardInfoProps = { props: [] };

export const CardInfo = (cardInfoProps: TheCardInfoProps) => {
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    },[]);
    const style = {
        borderRadius: '7px', cursor: 'pointer', textDecoration: 'none',
    };
    return (
        (cardInfoProps.props == null) || (cardInfoProps.props.length === 0) ? 
        <VStack w='full' h='70vh'>
            <Spacer/>
            <Heading>No Information yet</Heading>
            <Spacer/>
        </VStack>
        : 
        <Box id='cardsInfo'>
            {/* Desktop */}
            <Box display={{base:'none', sm:'none', md:'none', lg:'flex'}}>
                {/* Hacer un Grid aca para meter 2 por fila */}
                <HStack w='full'>
                    <Spacer/>
                    <Grid templateColumns='repeat(2, 1fr)' gap={6} margin='10px'> 
                        {
                            cardInfoProps.props.map((prop, index) => {
                                return(
                                    <Container variant='cardInfo' style={style} w='40vw' key={index}>
                                        <GridItem colSpan={2}>
                                            <CardInfoDesktop {...prop}/>
                                        </GridItem>
                                    </Container>
                                )
                            })
                        }
                    </Grid>
                    <Spacer/>
                </HStack>
            </Box>
            {/* Mobile */}
            <Box display={{base:'flex', sm:'flex', md:'flex', lg:'none'}}>
                {/* Desplegar cada Card verticalmente */}
                <HStack>
                    <Spacer/>
                    <VStack>
                        {
                            cardInfoProps.props.map((prop, index) => {
                                return(
                                    <Container variant='cardInfo' style={style} w='80vw' key={index}>
                                        <CardInfoDesktop {...prop}/>
                                    </Container>
                                )
                            }) 
                        }
                    </VStack>
                    <Spacer/>
                </HStack>
            </Box>
        </Box>
    )
}


const CardInfoDesktop = (props: CardInfoProps) => {
    const style = { textDecoration: 'none' };
    const bgBox = useColorModeValue('#CBD5E0', '#4A5568');
    const bg = useColorModeValue('#E2E8F0','#2D3748');
    const href = (props.blog ? '/blog/' : '/projects/') + props.href;
    return (
            <NextLink href={ href }>
                <HStack w='full' minH='40vh' p={4} variant='cardInfo' style={style}>
                    <VStack h='full' w='full'>
                        <Container bg={bg} padding='5px' style={{borderRadius: '10px'}}>
                            <Box bg={bgBox} style={{borderRadius: '10px'}}>
                                {
                                    props.photoURL != null ?
                                    <Image src={props.photoURL} style={{borderRadius: '10px 10px 0px 0px'}} alt='photoInfo' />
                                    : null
                                }
                                <Box h='2.5px'/>
                                <Text as='i' fontSize='xs' style={{textAlign: 'justify'}} marginLeft='10px'>{ props.date }</Text>
                                <Box h='2.5px'/>
                            </Box>
                            <Box h='10px'/>
                            <Heading>{ props.title }</Heading>
                            <Box h='5px'/>
                            <Text fontSize='xs' style={{textAlign: 'justify'}} p={2}>{ props.description }</Text>
                            <HStack w='full'>
                                <Spacer/>
                                {
                                    props.frameworkPhotoURL != null ? 
                                    <Image src={props.frameworkPhotoURL} alt='framework' boxSize='50px'/>
                                    : null
                                }
                            </HStack>
                        </Container>
                    </VStack>
                </HStack>
            </NextLink>
    )
}

/*
Estilo del card info anterior
    return (
            <Link href={props.href} style={style} variant='cardInfo'>
                <HStack w='full' minH='40vh' p={4}>
                    <VStack h='full' w='full'>
                        <Heading>{props.title}</Heading>
                        <Box h='5px'/>
                        <HStack w='full'>
                            <Text as='i' fontSize='xs' style={{textAlign: 'justify'}}>{props.date}</Text>
                        </HStack>
                        <Box h='5px'/>
                        <HStack w='full'>
                            <Text fontSize='xs' style={{textAlign: 'justify'}}>{props.description}</Text>
                        </HStack>
                        <Spacer/>
                        <HStack w='full'>
                            <Spacer/>
                            <Image src={props.frameworkPhotoURL} alt='framework' boxSize='50px'/>
                        </HStack>
                    </VStack>
                </HStack>
            </Link>
    )
*/