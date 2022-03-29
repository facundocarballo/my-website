import { useColorModeValue, Box, HStack, VStack, Spacer, Heading, Text, Image, Button } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
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
        description: "Swift was my first language that I used to develop something for myself. I'm in love with Swift and ofcourse with SwiftUI too. I really enjoy developing for iOS Native.",
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
        description: 'I started with flutter to develop an Android app, because the flutter workflow looks very similar to SwiftUI. Since then, I started developing more applications on Flutter. With Flutter I developed a booking app for my father, who owns a local barbershop.',
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
        description: "I hated web development until I found React and specially Chakra UI. I don't like to spend a lot of time styling my apps, and always that I wanted to develop some website, never finished them because I had huge's problems with my CSS. With React and ChakraUI was a huge game changeller, now I can develop beautiful websites without a deep knowledge of CSS. This website is build on React with ChakraUI.",
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
    const skillCardStyle : React.CSSProperties = {
        //border: '1px solid #A0AEC0',
        borderRadius: '7px',
        //boxShadow: '2px 2px 2px #A0AEC0'
    };
    const bg = useColorModeValue('gray.200', 'gray.700');
    //const { projects } = useBlog();
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
                {/* { projects != null ? <Button as='a' href='' variant='callToAction' w='full'>See my Projects</Button> : null } */}
                
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