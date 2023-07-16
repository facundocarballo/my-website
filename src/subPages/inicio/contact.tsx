import React from 'react'
import { Text, Link, useColorModeValue, useColorMode, Box, HStack, VStack, Spacer, Heading, Image, FormControl, FormLabel, Input, Select, Button, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { InfoIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { ContextProps } from '../../props/contextProps';
import { sendMessage } from '../../functions/firebase';

export const Contact = () => {
    
    const bg = useColorModeValue('bgLight', 'bgDark');

    

    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    });

    

    return (
        <Box w='full' id='contactMe'>
            {/* Desktop */}
            <Box display={{base:'none', sm:'none', md:'flex', lg:'flex'}}>
                <ContactDesktop width={width} height={height} bg={bg}/>
            </Box>
            {/* Mobile */}
            <Box display={{base:'flex', sm:'flex', md:'none', lg:'none'}}>
                <ContactMobile width={width} height={height} bg={bg}/>
            </Box>
        </Box>
    )
}

export interface ContactInfo {
    name: string,
    lastName: string,
    tel: string,
    email: string,
    interest: string,
    details?: string,
};

const ContactDesktop = ({width, height, bg}: ContextProps) => {
    const {colorMode} = useColorMode();
    const isDark = ('dark' === colorMode);

    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [details, setDetails] = React.useState('');
    const [send, setSend] = React.useState(false);
    const [succes, setSucces] = React.useState(false);

    

    const regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    const regexPhone = new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$');


    const isNameOK = (): boolean => {
        if(!send) return true;
        return name != '';
    };
    const isLastNameOK = (): boolean => {
        if(!send) return true;
        return lastName != '';
    };
    const isPhoneNumberOK = (): boolean => {
        if (!send) return true;
        return regexPhone.test(tel);
    };
    const isEmailOK = (): boolean => {
        if (!send) return true;
        return regexEmail.test(email);
    };
    const isOK = (): boolean => {
        if ( name != '' && lastName != '' && regexPhone.test(tel) && regexEmail.test(email) ) return true;
        return false;
    }

    const handleSendMessage = async (): Promise<void> => {
        setSend(true);
        var element = (document.getElementById("interest")) as HTMLSelectElement;
        var selectedValue = element.options[element.selectedIndex].value;
        if (isOK()) {
            const contactInfo: ContactInfo = {
                name: name,
                lastName: lastName,
                email: email,
                tel: tel,
                details: details,
                interest: selectedValue,
            };
            await sendMessage(contactInfo);
            setSucces(true);
        }
    }

    return (
        <HStack bg={bg} width={width}>
            <Box w='80px' h='400px'/>
            <VStack>
                <Heading>Contáctame</Heading>
                <Image
                src='https://i.ibb.co/pPz6xLR/memoji-pina.webp'
                boxSize={[0,0,210,275]}
                alt='Contact Me'
                />
            </VStack>
            <Spacer/> 
            <HStack>
                <Box w='10px'/>
                <Link  href='https://t.me/carballofacundo' isExternal>
                    <Button variant='telegram' w='full'>
                        <Spacer />
                        <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png'
                        alt='telegram'
                        boxSize='30px'
                        />
                        <Box w='10px' />
                        <Text>Escribeme por Telegram</Text>
                        <Spacer />
                    </Button>
                </Link>

                <Text>o</Text>
                
                <Link  href='https://wa.me/5491158679316' isExternal>
                    <Button variant='wpp' w='full'>
                        <HStack w='full'>
                            <Spacer />
                            <Image
                            src='https://i.ibb.co/mz6BtQ3/Whats-App-svg.png'
                            alt='wsp'
                            boxSize='30px'
                            />
                            <Text>Escribeme por Whatsapp</Text>
                            <Spacer />
                        </HStack>
                    </Button>
                </Link>
            </HStack>
            <Box w='80px'/>
        </HStack>
    )
}



const ContactMobile = ({width, height, bg}: ContextProps) => {
    const {colorMode} = useColorMode();
    const isDark = ('dark' === colorMode);

    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [details, setDetails] = React.useState('');
    const [send, setSend] = React.useState(false);
    const [succes, setSucces] = React.useState(false);

    

    const regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    const regexPhone = new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$');


    const isNameOK = (): boolean => {
        if(!send) return true;
        return name != '';
    };
    const isLastNameOK = (): boolean => {
        if(!send) return true;
        return lastName != '';
    };
    const isPhoneNumberOK = (): boolean => {
        if (!send) return true;
        return regexPhone.test(tel);
    };
    const isEmailOK = (): boolean => {
        if (!send) return true;
        return regexEmail.test(email);
    };
    const isOK = (): boolean => {
        if ( name != '' && lastName != '' && regexPhone.test(tel) && regexEmail.test(email) ) return true;
        return false;
    }

    const handleSendMessage = async (): Promise<void> => {
        setSend(true);
        var element = (document.getElementById("interest")) as HTMLSelectElement;
        var selectedValue = element.options[element.selectedIndex].value;
        if (isOK()) {
            const contactInfo: ContactInfo = {
                name: name,
                lastName: lastName,
                email: email,
                tel: tel,
                details: details,
                interest: selectedValue,
            };
            await sendMessage(contactInfo);
            setSucces(true);
        }
    }

    return (
        <HStack bg={bg} width={width}>
            <Spacer />
            <VStack w='full'>
                <HStack w='full'>
                    <Box w='10px'/>
                    <Heading fontSize='2xl'>Contactame</Heading>
                    <Spacer/>
                    <Image
                    src='https://i.ibb.co/pPz6xLR/memoji-pina.webp'
                    boxSize={[175,210,210,275]}
                    alt='Contact Me'
                    />
                </HStack>
                <Box w='full' p='8px'/>
                <Link w='full' href='https://t.me/carballofacundo' isExternal>
                    <Button variant='telegram' w='full'>
                        <Spacer />
                        <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png'
                        alt='telegram'
                        boxSize='30px'
                        />
                        <Box w='10px' />
                        <Text>Escribeme por Telegram</Text>
                        <Spacer />
                    </Button>
                </Link>
                
                <Text>o</Text>
                
                <Link w='full' href='https://wa.me/5491122515318' isExternal>
                    <Button variant='wpp' w='full'>
                        <HStack w='full'>
                            <Spacer />
                            <Image
                            src='https://i.ibb.co/mz6BtQ3/Whats-App-svg.png'
                            alt='wsp'
                            boxSize='30px'
                            />
                            <Text>Enviame un Whatsapp</Text>
                            <Spacer />
                        </HStack>
                    </Button>
                </Link>

            </VStack>
            <Spacer />
        </HStack>
    )
}


