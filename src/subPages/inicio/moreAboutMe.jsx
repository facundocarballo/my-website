import { VStack, HStack, Box, Spacer, Text, Heading, Image } from "@chakra-ui/react";

export const MoreAboutMe = () =>
{
    return (
        <>
            <HStack w='full' display={{lg: 'flex', md: 'flex', sm: 'none', base: 'none'}} minH='500px'>
                <Box h='100px' w='50px' />
                <Image
                src='https://i.ibb.co/y8Dydwy/memoji-compu.webp'
                alt='memojiCompu'
                boxSize='250px'
                />
                <Spacer />
                <Text align='justify' fontSize={[0,0,'20px','25px']} w='500px'>
                    {'Tengo un canal de YouTube donde comparto todo lo que voy aprendiendo y haciendo sobre Desarrollo Blockchain y Web.'}
                </Text>
                <Box w='150px' />
            </HStack>

            <VStack w='full' display={{lg: 'none', md: 'none', sm: 'flex', base: 'flex'}} minH='500px'>
                <Spacer />
                <HStack>
                    <Spacer />
                    <Text align='justify' fontSize={['20px','20px','0px','0px']}>
                        {'Tengo un canal de YouTube donde comparto todo lo que voy aprendiendo y haciendo sobre Desarrollo Blockchain y Web.'}
                    </Text>
                    <Spacer />
                </HStack>
                <Image
                    src='https://i.ibb.co/y8Dydwy/memoji-compu.webp'
                    alt='memojiCompu'
                    boxSize='250px'
                />
                <Spacer />
            </VStack>
        </>
    );
}