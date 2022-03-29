// TODO: Reaorganizar el contact form
// TODO: Vincular el contact form con Base de Datos
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
                <Heading>Contact Me</Heading>
                <Image
                src='https://i.ibb.co/pPz6xLR/memoji-pina.webp'
                boxSize={[0,0,210,275]}
                alt='Contact Me'
                />
            </VStack>
            <Spacer/> 
            <form action='submit'>
                <HStack>
                    <VStack w={width / 2} p='8px'>
                    <HStack w='full'>
                        <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <InputGroup>
                                <InputLeftElement children={<InfoIcon/>}/> 
                                <Input type="name" placeholder="Facundo" onChange={ (e) => setName(e.currentTarget.value) } borderColor={  isNameOK() ? 'gray.200' : 'red.500' }/>
                            </InputGroup>
                        </FormControl>
                        <FormControl id="lastName" isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <InputGroup>
                                <InputLeftElement children={<InfoIcon/>}/> 
                                <Input type="name" placeholder="Carballo" onChange={ (e) => setLastName(e.currentTarget.value) } borderColor={  isLastNameOK() ? 'gray.200' : 'red.500' } />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="typeConsult" isRequired>
                    <FormLabel>Your Interest</FormLabel>
                    <InputGroup>
                        <Select id='interest'>
                            <option value="business">Business</option>
                            <option value="flutter">Flutter</option>
                            <option value="react">React</option>
                            <option value='iosNative'>iOS Native</option>
                            {/* <option value="blockchain">Blockchain</option> */}
                            <option value="others">Others</option>
                        </Select>
                    </InputGroup>
                </FormControl>
                    </HStack>
                <HStack w='full'>
                    <FormControl id="phoneNumber" isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <InputGroup>
                        <InputLeftElement children={<PhoneIcon/>}/> 
                        <Input type="tel" placeholder="+54-9-11-5103-9050" onChange={ (e)=> setTel(e.currentTarget.value) } borderColor={  isPhoneNumberOK() ? 'gray.200' : 'red.500' } />
                    </InputGroup>
                </FormControl>
                <Spacer/>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                        <InputLeftElement children={<EmailIcon/>}/> 
                        <Input type="email" placeholder="fc@facundocarballo.com" onChange={ (e)=> setEmail(e.currentTarget.value) } borderColor={  isEmailOK() ? 'gray.200' : 'red.500' } />
                    </InputGroup>
                </FormControl>
                </HStack>
                <FormControl id="aditionalDetails">
                    <FormLabel>Aditional Details</FormLabel>
                    <InputGroup w='full' h='150px' marginBottom='5px'>
                    {
                        isDark ? 
                        <textarea onChange={ (e)=> setDetails(e.currentTarget.value) } name='details' id='details' style={{'resize': 'none', width:'100%', height:'100%', backgroundColor:'#1A202C', border:'1px solid #4A5568', borderRadius: '8px', padding:'8px'}}>
                        </textarea>
                        :
                        <textarea onChange={ (e)=> setDetails(e.currentTarget.value) } name='details' id='details' style={{'resize': 'none', width:'100%', height:'100%', backgroundColor:'#EDF2F7', border:'1px solid #CBD5E0', borderRadius: '8px', padding:'8px'}}>
                        </textarea>
                    }
                    </InputGroup>
                </FormControl>
                <HStack w='full'>
                    <Spacer/>
                    {/* El problema con el 'submit' es que nos redirecciona a una pagina que no existe. */}
                    {
                        succes ? 
                        <Button variant='none' bg='green.400' w='full'>Message Sent Succesfully</Button> 
                        : 
                        <HStack w='full'>
                            <Button variant='callToAction' w='full' onClick={ () => handleSendMessage() }>Send Message</Button>
                            <Spacer />
                            <Text>or</Text>
                            <Spacer />
                            <Link w='full' href='https://wa.me/5491122515318' isExternal>
                                <Button variant='wpp' w='full'>
                                <HStack w='full'>
                                    <Spacer />
                                    <Image
                                    src='https://i.ibb.co/mz6BtQ3/Whats-App-svg.png'
                                    alt='wsp'
                                    boxSize='30px'
                                    />
                                    <Text>Send me a Whatsapp</Text>
                                    <Spacer />
                                </HStack>
                                </Button>
                            </Link>
                        </HStack>
                    }
                    <Spacer/>
                </HStack>
                
                
            </VStack>
                </HStack>
            </form>
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
                    <Heading fontSize='2xl'>Contact Me</Heading>
                    <Spacer/>
                    <Image
                    src='https://i.ibb.co/pPz6xLR/memoji-pina.webp'
                    boxSize={[175,210,210,275]}
                    alt='Contact Me'
                    />
                </HStack>
                <Box w='full' p='8px'>
                    <form action='submit'>
                    <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <InputGroup>
                                <InputLeftElement children={<InfoIcon/>}/> 
                                <Input type="name" placeholder="Facundo" onChange={ (e) => setName(e.currentTarget.value) } borderColor={  isNameOK() ? 'gray.200' : 'red.500' } />
                            </InputGroup>
                    </FormControl>
                    <Box h='10px'/>
                    <FormControl id="lastName" isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<InfoIcon/>}/> 
                            <Input type="name" placeholder="Carballo" onChange={ (e) => setLastName(e.currentTarget.value) } borderColor={  isLastNameOK() ? 'gray.200' : 'red.500' } />
                        </InputGroup>
                    </FormControl>
                    <Box h='10px'/>
                    <FormControl id="typeConsult" isRequired>
                        <FormLabel>Your Interest</FormLabel>
                        <InputGroup>
                            <Select id='interest' >
                                <option value="business">Business</option>
                                <option value="flutter">Flutter</option>
                                <option value="react">React</option>
                                <option value='iosNative'>iOS Native</option>
                                <option value="blockchain">Blockchain</option>
                                <option value="others">Others</option>
                            </Select>
                        </InputGroup>
                    </FormControl>
                    <Box h='10px' />
                    <FormControl id="phoneNumber" isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<PhoneIcon/>}/> 
                            <Input type="tel" placeholder="+54-9-11-5103-9050" onChange={ (e)=> setTel(e.currentTarget.value) } borderColor={  isPhoneNumberOK() ? 'gray.200' : 'red.500' } />
                        </InputGroup>
                    </FormControl>
                    <Box h='10px' />
                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<EmailIcon/>}/> 
                            <Input type="email" placeholder="fc@facundocarballo.com" onChange={ (e)=> setEmail(e.currentTarget.value) } borderColor={  isEmailOK() ? 'gray.200' : 'red.500' } />
                        </InputGroup>
                    </FormControl>
                    <Box h='10px' />
                    <FormControl id="aditionalDetails">
                        <FormLabel>Aditional Details</FormLabel>
                        <InputGroup w='full' h='150px' marginBottom='5px'>
                        {
                        isDark ? 
                        <textarea onChange={ (e)=> setDetails(e.currentTarget.value) } name='details' id='details' style={{'resize': 'none', width:'100%', height:'100%', backgroundColor:'#1A202C', border:'1px solid #4A5568', borderRadius: '8px', padding:'8px'}}>
                        </textarea>
                        :
                        <textarea onChange={ (e)=> setDetails(e.currentTarget.value) } name='details' id='details' style={{'resize': 'none', width:'100%', height:'100%', backgroundColor:'#EDF2F7', border:'1px solid #CBD5E0', borderRadius: '8px', padding:'8px'}}>
                        </textarea>
                        }
                        </InputGroup>
                    </FormControl>
                </form>
                </Box>
                <HStack w='full'>
                    <Spacer/>
                    {
                        succes ? 
                        <Button variant='none' bg='green.400' w='full'>Message Sent Succesfully</Button> 
                        : 
                        <Button variant='callToAction' w='full' onClick={ () => handleSendMessage() }>Send Message</Button>
                    }
                    <Spacer/>
                </HStack>
                <Link w='full' href='https://wa.me/5491122515318' isExternal>
                    <Button variant='wpp' w='full'>
                        <HStack w='full'>
                            <Spacer />
                            <Image
                            src='https://i.ibb.co/mz6BtQ3/Whats-App-svg.png'
                            alt='wsp'
                            boxSize='30px'
                            />
                            <Text>Send me a Whatsapp</Text>
                            <Spacer />
                        </HStack>
                    </Button>
                </Link>
            </VStack>
            <Spacer />
        </HStack>
    )
}
// COPIAR TODO ESTO Y PEGARLO EN EL CONTACT DE /es. Traducir cada textito.