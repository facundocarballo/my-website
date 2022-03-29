import { VStack, Image, Heading, Text, Container, useColorModeValue, Box } from '@chakra-ui/react';
import React from 'react';

export interface BlogCardProps {
    title: string;
    description: string;
    image: string;
}

export const BlogCard = (props: BlogCardProps) => {
    const bg = useColorModeValue('#E2E8F0', '#2D3748');
    return (
        <VStack w='100%' style={{borderRadius: '5px 10px'}} bg={bg}>
            <Image src={props.image} alt='imageBlog'  style={{borderRadius: '5px'}}/>
            <Container>
                <Heading>{props.title}</Heading>
                <Text>{props.description}</Text>
            </Container>
            <Box h='10px'/>
        </VStack>
    )
}   