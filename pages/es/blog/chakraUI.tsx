import React from 'react';
import Head from 'next/head';
import {VStack, HStack, Spacer, Image, useColorModeValue, Box, Divider, Heading, Text, Code} from '@chakra-ui/react';
import { NavBar } from '../../../src/components/navbar';
import { theNavBarES } from '../../../src/functions/navbar';
import { Footer } from '../../../src/components/footer';

export default function ChakraUI() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    return (
        <VStack w='full' bg={bg}>
            <Head>
                <title>ChakraUI</title>
                <meta name="description" content="Libreria de componentes de React. Permite crear interfaces de usuario muy lindas y rapidas, al estilo de SwiftUI en iOS o como Flutter."/>
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
    const vsString = 'VStack & HStack';
    return (
        <VStack w='full' h='full'>
            <Box h='10px'/>
            <Parrafo>
                ChakraUI es una librería gratuita de componentes de React que nos ayudará a crear sofisticadas interfaces de usuario sin un basto conocimiento de CSS. Cada componente de ChakraUI viene listo para usar, cada uno con su respectiva documentación donde se detalla su implementación en código y algunos ejemplos visuales. Encontraremos componentes de diseño donde podremos armar toda la interfaz de usuario dentro de ellos, componentes que interactúan con el usuario como botones, inputs, sliders, iconos, textos simples y/o encabezados; y componentes que proporcionan feedback al usuario, como alertas, popovers, y demás. 
            </Parrafo>
            <Box h='10px' />
            <Titulo>Hooks</Titulo>
            <Parrafo>
                Además de todos estos componentes, la librería de ChakraUI nos proporciona una serie de hooks muy útiles para gestionar el estilo de todos los componentes. Por ejemplo el color de fondo de un botón en modo oscuro o modo claro. Para poder diferenciar cuando se está en modo oscuro o modo claro ChakraUI nos brinda hooks como, useColorMode que devolverá una variable de tipo booleana que indica el modo en el que se encuentra el sitio web en ese momento (que por defecto en ChakraUI el modo inicial del sitio web es el modo claro, cosa que podremos alterar modificando el theme por defecto) y una función que al ejecutarla cambiará el estado de la variable booleana que se devolvió en primera instancia (permitiendo el cambio entre modo claro y modo oscuro). Luego otro hook como useColorModeValue recibirá dos parámetros, el primero será el color que tomará esa variable en el modo claro, mientras que el segundo valor será el que tomará la variable en el modo oscuro; y esta variable la podremos utilizar en cualquier componente de ChakraUI.
            </Parrafo>
            <Box h='10px'/>
            <CodeExample/>
            <Box h='10px'/>
            <Titulo>Instalación</Titulo>
            <Parrafo>
                La instalación tanto en Windows como en macOS son muy similares, en ambas debemos de tener instalado node para poder instalar el paquete de ChakraUI utilizando npm. Creamos un proyecto cualquiera de React, yo en este caso estoy utilizando el framework NextJS pero no es necesario que ustedes también lo creen con Next, ChakraUI funciona para cualquier framework de React. Eso sí, pueden cambiar algunas cosas a la hora de la configuración pero por suerte ChakraUI tiene todo muy bien documentado, así que cualquiera sea el framework que están utilizando seguramente exista una documentación que los guíe para que lo puedan configurar correctamente.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>{vsString}</Titulo>
            <Parrafo>
                Para empezar a modelar interfaces de usuario con ChakraUI los componentes más básicos e importantes a entender son el VStack y el HStack. Estos dos componentes son muy fáciles de entender, dentro de estos componentes nosotros podremos colocar otros componentes o incluso etiquetas de HTML e ir formando así estructuras complejas. Si bien a mi entender estos dos componentes de diseño son los de mayor utilidad en toda la librería de ChakraUI, hay que reconocer que para construir interfaces de usuario demasiado complejas capaz se nos resulta muy difícil trabajar con simples HStacks y VStacks. Para este tipo de situaciones existen otros componentes de diseño como el Grid o el Flex, que nos ayudarán mucho a la hora de crear estos tipos de interfaces de usuario.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>VStack</Titulo>
            <Parrafo>
                Todos los componentes o etiquetas HTML que agreguemos dentro del componente VStack se irán colocando uno debajo del otro.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>HStack</Titulo>
            <Parrafo>
                Mientras que los componentes que coloquemos dentro de un HStack, se irán reflejando uno al lado del otro.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>Componentes</Titulo>
            <Parrafo>
                Cada componente puede recibir distintos atributos de tipo CSS, los VStack y los HStack por ejemplo pueden recibir los atributos width y height, que le indicarán a cada componente cuáles serán las medidas que ocupará en pantalla. Dentro de la documentación de ChakraUI, cada componente tiene su propia sección donde se explica detalladamente la implementación y la funcionalidad del componente. Incluyen ejemplos muy prácticos y visuales, que nos ayudarán a darnos cuenta más fácilmente el propósito del componente y como se tiene que implementar en el código. Además al final de cada una de estas páginas encontrarás siempre todos los atributos CSS que se le pueden pasar al componente en cuestión.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>Iconos</Titulo>
            <Parrafo>
                ChakraUI nos brinda además de todos los componentes una serie de iconos muy útiles para estilizar nuestras interfaces gráficas. Para poder utilizarlos necesitaremos instalar otro paquete de npm @chakra-ui/icons y luego ir importandolos como hacemos con los componentes. Al igual que los componentes, los iconos pueden recibir distintos atributos CSS que te permitirán estilizarlos de la manera que más te guste. De todas formas los invito a ver la documentación oficial donde verán todos los iconos que ofrece ChakraUI y cómo se implementa cada uno de ellos.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>Responsive Style</Titulo>
            <Parrafo>
                Otra de las grandes ventajas que tenemos al trabajar con ChakraUI es la facilidad con la que podemos crear interfaces responsivas, que sirvan tanto para un usuario que nos visita desde su computadora o tablet como también el usuario proveniente de un celular.
La gran mayoría de los componentes tienen disponible el atributo CSS display, con esto nosotros podremos decidir cuando un componente se mostrará o no por pantalla. Dentro de este atributo tendremos que pasarle medidas donde le indicaremos al componente como se tiene que desplegar en pantalla, por ejemplo a partir de los 400px quiero que te comportes con un display de tipo flex, o block, o inline, etc. Por suerte ChakraUI dentro de su theme tiene incorporado medidas preestablecidas (los famosos breakpoints) que funcionan para separar el diseño en web, tablet y celular siguiendo las resoluciones de sus respectivas pantallas.
            </Parrafo>
            <Box h='10px'/>
            <Titulo>Customize Theme</Titulo>
            <Parrafo>
                Por defecto, todos los componentes heredan estilos y valores debido al theme de ChakraUI los cuales son varios y podremos hacer diferentes combinaciones entre ellos para lograr una linda interfaz de usuario. Pero existirán situaciones donde queramos algo más personalizado, y ahí tocará modificar el theme. Esto se puede hacer y de una manera muy rápida y sencilla, en la documentación oficial encontraremos un apartado llamado Customize Theme que nos guiará paso a paso para que podamos crear un theme personalizado. Crear un theme personalizado en ChakraUI nos ahorrará mucho tiempo en el desarrollo de nuestro proyecto y hará nuestro código mucho más limpio y entendible. Podremos agregar colores nuevos que luego tendremos que llamar con el nombre que nosotros mismos le dimos, lo mismo con los tamaños de fuentes, los breakpoints y hasta los estilos de los componentes. Tendremos total libertad para hacer que los componentes de ChakraUI se comporten como nosotros queramos.
            </Parrafo>
            <Box h='30px'/>
            <Footer/>
        </VStack>
    );
};

export const Parrafo = (props:any) => {
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

export const Titulo = (props:any) => {
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