import React from 'react';
import Head from 'next/head';
import {VStack, HStack, Spacer, Image, useColorModeValue, Box, Divider, Heading, Text, Code} from '@chakra-ui/react';
import { NavBar } from '../../src/components/navbar';
import { theNavBarES } from '../../src/functions/navbar';
import { Footer } from '../../src/components/footer';

export default function ChakraUI() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    return (
        <VStack w='full' bg={bg}>
            <Head>
                <title>ChakraUI</title>
                <meta name="description" content= "React Components library. Allows you to create complex UI/UX very quickly, very similar to SwiftUI or Flutter."/>
                <meta name='image' content='https://i.ibb.co/x6Mhvv3/Captura-de-Pantalla-2021-12-28-a-la-s-22-54-50.png'/>
            </Head>
            <NavBar props={theNavBarES} />
            <Divider />
            <Box h='50px' />
            <HStack w='full'>
                <Spacer/>
                <Heading size='4xl'>ChakraUI</Heading>
                <Spacer/>
            </HStack>
            <ChakraUIContent />
        </VStack>
    );
};

const ChakraUIContent = () => {
    const vstackString = 'VStack & HStack';
    const installationString = "The installation of ChakraUI on windows or macOS its very similar. In both of them we have to have installed node to install the ChakraUI package using npm. Create any React project, I particularly am using NextJS a React framework. But it isn't necessary that you use Next too, ChakraUI works with any React framework and in his docs it's all explained step by step all to install ChakraUI with our favourite framework.";
    const vsStackString2 = "To start to mockup our UI/UX with ChakraUI the most basic and important design components are VStack and HStack. These two components are very easy to understand, inside of these components we can put other components or even HTML tags, making complex structures. However there will be situations where with these two components it will be difficult for us to create our dreamed UI/UX. For this kind of situation it's that there exist other design components like Grid or Flex which save us.";
    const componentString = "Each component can receive different CSS attributes, the VStack and HStack for example can receive width & height attributes and many others, of course, with these two attributes we can define the sizes of our components. In the official documentation of ChakraUI, each component has its own section where it's explained all about the component. I highly recommend that you visit the documentation of all the components that you need to use, because it has a lot of examples and implementations and you can see how these components it’s supposed to work. Also at the end of each component page you will find all the CSS attributes that this component can receive.";
    const responsiveStyleString = "Another greatest advantage of using ChakraUI is that it's one of the easiest ways to create UI responsiveness, that works for an user from mobile and desktop. Almost all the components have the CSS attribute display, with this we can decide when a component shows or not. In this CSS attribute we have to pass the measures where we want to display the component, for example since the 400px I want to show this component with a display of type flex or block or inline, etc. Luckily in the default theme of ChakraUI we have all the breakpoints that we need to work in a responsive way.";
    return (
        <VStack w='full' h='full'>
            <Box h='10px'/>
            <Parrafo>
                ChakraUI is a simple and free components library that helps developers to create complex UI/UX without a huge knowledge about CSS. Each component is ready to use, each one has his own documentation where it’s detailed code implementation and some visual examples. We will find some design components with which we can make the UI/UX inside of these componentes, others components who interact with the user like buttons, inputs, sliders, icons, texts or headers; and also components who give feedback to the user like alerts, popovers and so on.
            </Parrafo>
            <Box h='10px' />
            <Titulo>Hooks</Titulo>
            <Parrafo>
                Also of these classes of components ChakraUI brings us a series of hooks very useful to manage the style of these components. For example the background of some component when it’s in light or dark mode. To differentiate when it’s in light or dark mode ChakraUI brings us hooks like, useColorMode which returns a boolean variable that indicate the mode of the website in that moment (by default ChakraUI put the initial mode of a web site as light mode, but this we can change it changing the theme of ChakraUI) and a function that when it’s called change the value of this boolean variable changing the mode of the web site too. Another hook useful to manage this kind of situation is useColorModeValue, this hook allows to indicate the color that a component will have in both of the possible modes, dark or light. The first parameter will be the color that will have in light mode and the second parameter will be the color that will have in dark mode.
            </Parrafo>
            <Box h='10px'/>
            <CodeExample />
            <Box h='10px'/>
            <Titulo>Instalation</Titulo>
            <Parrafo>{installationString}</Parrafo>
            <Box h='10px'/>
            <Titulo>{vstackString}</Titulo>
            <Parrafo>{vsStackString2}</Parrafo>
            <Box h='10px'/>
            <Titulo>VStack</Titulo>
            <Parrafo>
                All the components or HTML tags that we put inside of a VStack component there will be placed one under the other.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>HStack</Titulo>
            <Parrafo>
                All the components that we put inside of a HStack component there will placed next to each other
            </Parrafo>
            <Box h='10px'/>
            <Titulo>Components</Titulo>
            <Parrafo>{componentString}</Parrafo>
            <Box h='10px'/>
            <Titulo>Icons</Titulo>
            <Parrafo>
                ChakraUI also brings us icons very useful to use and stylize our UI. To use these icons we need to install another npm package @chakra-ui/icons import all the icons that we need, like we do with the components. Like components, icons can receive CSS attributes that allow us to style it. Anyway I invite you to visit the official documentation of ChakraUI where you can see all the icons that ChakraUI provides us and how each Icon is implemented.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>Responsive Style</Titulo>
            <Parrafo>{responsiveStyleString}</Parrafo>
            <Box h='10px'/>
            <Titulo>Customize Theme</Titulo>
            <Parrafo>
                By default, all the components inherit styles and values from the default theme of ChakraUI, the default theme has a lot of styles and values to use. But in some situations we will want something more personalized and then we will have to modify the default theme. This can be done very quickly, the documentation has a section called Customize Theme which guides us step by step to create a personalized theme. Then we can add new colors, size fonts, breakpoints and the default styles of the components. 
            </Parrafo>
            <Box h='30px'/>
            <Footer/>
        </VStack>
    );
};

const Parrafo = (props:any) => {
    return (
        <HStack w='full'>
                <Box w='40px'/>
                <Text align='justify'>
                    {props.children}
                </Text>
                <Box w='40px'/>
        </HStack>
    );
}

const Titulo = (props:any) => {
    return(
        <HStack w='full'>
                <Box w='10px'/>
                <Heading size='md'>{props.children}</Heading>
                <Spacer/>
            </HStack>
    );
}

const CodeExample = () => {
    const useColorModeString = 'const { colorMode, toggleColorMode } = useColorMode()';
    const useColorModeValueString = 'const value = useColorModeValue(lightModeValue, darkModeValue)';
    return (
        <VStack w='full'>
            <Box display={{lg:'flex', md:'flex', sm:'none', base:'none'}}>
                <HStack w='full'>
                    <Spacer />
                    <Code>{useColorModeString}</Code>
                    <Spacer />
                    <Code>{useColorModeValueString}</Code>
                    <Spacer />
                </HStack>
            </Box>
            <Box display={{lg:'none', md:'none', sm:'flex', base:'flex'}}>
                <VStack w='full' p={4}>
                    <Code>{useColorModeString}</Code>
                    <Box h='5px' />
                    <Code>{useColorModeValueString}</Code>
                </VStack>
            </Box>
        </VStack>
    );
};