import {useColorModeValue, Box, HStack, VStack, Spacer, Heading, Text, Image, Button} from '@chakra-ui/react'
import {CheckIcon} from '@chakra-ui/icons'
import React from 'react';
import { ContextProps } from '../../props/contextProps';


interface Framework {
    title: string,
    description: string,
    skills: string[],
    contextProps: ContextProps,
}

interface SkillsProps {
    frameworks: Framework[],
}

interface SkillItemProps {
    skill: string,
}

interface ListSkillProps {
    skills: string[],
}

export const Skills = () => {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    });
    const contextProps : ContextProps = {
        width: width, height: height, bg:bg
    };
    const swiftUI : Framework = {
        title: "Swift UI",
        description: "Swift fue el primer lenguaje que use para crear una aplicacion. Me encanta desarrollar para iOS, mucho mas si es en SwiftUI.",
        skills: [
            'View Model',
            'Observable Object',
            'Firebase',
            'Api Rest',
        ],
        contextProps: contextProps,
    };

    const flutter : Framework = {
        title: 'Flutter',
        description: 'Empecé con Flutter porque queria desarrollar una aplicacio para Android, y Flutter era el framework mas similar a SwiftUI. Entoces decidi utilizar Flutter envez de Android Nativo. Luego me fui introduciendo cada vez mas porque podia crear aplicaciones mucho mas rapido para ambas plataformas (iOS, Android y Web).',
        skills: [
            'Dart',
            'Provider',
            'Firebase',
            'Api Rest',
        ],
        contextProps: contextProps
    };

    const react : Framework = {
        title: 'React',
        description: "La verdad que no me gusta mucho el desarrollo web. Pero con react y especialmente con la ayuda de ChackraUI empece a tomarle el gustito. No disfruto del desarrollo que involucre CSS, siempre que intentaba hacer algo para Web lo terminaba dejando porque pasaba mucho tiempo con CSS y no lo disfrutaba. Con la ayuda de ChakraUI, este problema se me solucionó. Ahora sin volverme loco con el CSS puede desarrollar Aplicaciones Web dignamente presentables.",
        skills: [
            'TypeScript & JavaScript',
            'ChakraUI',
            'Firebase',
            'Api Rest',
        ],
        contextProps: contextProps
    };

    const frameworks : Framework[] = [
        swiftUI,
        flutter,
        react,
    ];


    return (
        <Box w='full'>
            {/* Desktop */}
            <Box display={{base:'none', sm:'none', md:'flex', lg:'flex'}}>
                <SkillsDesktop frameworks={frameworks} />
            </Box>
            {/* Mobile */}
            <Box display={{base:'flex', sm:'flex', md:'none', lg:'none'}}>
                <SkillsMobile frameworks={frameworks} />
            </Box>
        </Box>
    )
}

const SkillItem = ({skill}: SkillItemProps) => {
    return (
        <HStack w='full'>
            <Text>{skill}</Text>
            <Spacer/>
            <CheckIcon/>
        </HStack>
    )
}

const SkillCard = ({title, description, skills, contextProps} : Framework) => {
    const bg = useColorModeValue('gray.200', 'gray.700');
    const skillCardStyle : React.CSSProperties = {
        //border: '1px solid #A0AEC0',
        borderRadius: '7px',
        //boxShadow: '2px 2px 2px #A0AEC0',
    };
    
    return (
        <VStack>
            <Box h='10px'/>
            <VStack p='8px' h={contextProps.height / 1.4} w='300px' style={skillCardStyle} bg={bg}>
                <Heading as='i'>{title}</Heading>
                <Box h='25px'/>
                <Box h={(contextProps.height / 1.4) / 3}>
                    <Text fontSize='xs' textAlign='justify'>{description}</Text>
                </Box>
                <Spacer/>
                    {
                    skills.map((skill, index) => 
                        <SkillItem skill={skill} key={index}/>
                    )
                    }
                <Spacer/>
                {/* <Button as='a' href='' variant='callToAction' w='full'>Mira mis proyectos</Button> */}
            </VStack>
        <Box h='10px'/>
        </VStack>
    )
}

const SkillsMobile = ({frameworks}: SkillsProps) => {
    return (
        <VStack w='full'>
            <Box h='10px'/>
            {
                frameworks.map((framework, index) =>
                <HStack w='full' key={index}>
                    <Spacer />
                    <SkillCard 
                    title={framework.title} 
                    description={framework.description} 
                    skills={framework.skills} 
                    contextProps={framework.contextProps}
                    />
                    <Spacer />
                </HStack>
                )
            }
            <Box h='10px'/>
        </VStack>
    )
}

const SkillsDesktop = ({frameworks}:SkillsProps) => {
    return (
        <HStack w='full'>
            <Box w='10px'/>
            <VStack h='full'>
                <Image 
                src='https://i.ibb.co/njSSSKN/Whats-App-Image-2022-01-16-at-20-46-50-removebg-preview.png' 
                alt='Facundo Carballo Skills'
                w='250px'
                h='250px'
                />
                <Spacer/>
            </VStack>
            <Spacer/>
                {
                    frameworks.map((framework, index) => 
                        <HStack key={index}>
                            <SkillCard 
                            title={framework.title} 
                            description={framework.description} 
                            skills={framework.skills} 
                            contextProps={framework.contextProps}
                            />
                        <Box w='10px'/>
                        </HStack>
                    )
                } 
            <Spacer/>
        </HStack>
    )
}