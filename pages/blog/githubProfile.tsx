import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link, Button } from "@chakra-ui/react"
import { Parrafo, Titulo } from "./../es/blog/chakraUI"
import { NavBar } from "./../../src/components/navbar"
import { theNavBar } from "./../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "Create a Professional GitHub Profile";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>Create a Professional GitHub Profile</title>
                <meta name="description" content="In this article you will see how to create a professional GitHub profile"/>
                <meta name='image' content='https://i.ibb.co/p1h1f4q/Captura-de-Pantalla-2022-02-14-a-la-s-13-01-17.png'/>
            </Head>
            <NavBar props={theNavBar} />
            <Box h='5px'/>
            <Divider />
            <Box h='50px'/>
            <HStack w='full'>
                <Spacer/>
                <Heading size='4xl'>{title}</Heading>
                <Spacer/>
            </HStack>
            <InteractTruffleReactContent />
            <Box h='30px' />
            <Footer />
        </VStack>
    ); 
}

const InteractTruffleReactContent = () => {
    const GitHub: string = "First, to get this Github Readme Profile we have to add a new Repository with the same name as your username. Like you can see I already have this Repository created, you can create your repository doing this. I can’t do it because I already have one. Before creating the Readme profile I want to get some inspiration seeing other professional profiles. You would have the link to see this Github Readme in the description of the video. First I want to create a banner to put on my Github Readme. I create these banners and all the images for YouTube using Figma. I use ChakraUI when I use React, and I really like the colors that this library has, so I use these colors to make some linear gradients. Now I take a Screenshot of the banner, and I will put this photo to a Cloud of images, it’s called imgbb it’s free and I recommend this app to hold the images on the Cloud. Now we copy the link of the image, and then inside of the readme file that it’s in your repository (if you don’t have the readme file you have to create it). And here I will add the image using the img tag. In source I paste the URL of the image and finally we can see how our banner looks. Now I want to add some text in our Readme Profile, like my name and some personal information about myself. Fortunately I already write the personal information when I create my website, so I just copy and paste from there. It 's looking nice, but like the name it’s already there by default for Github I decided to remove it from the Readme Profile. Now it’s time for the Skills. I want to add the icons of each language, library and framework that I know. To do that I will just search some images on Google and then I will copy the URL of each image and finally I will paste on the img tag in the source section. Also I will customize the width of the image. Then I will do the same with all of my Skills. A contact me section it’s important because it’s the major way where someone will contact us. So I will do the same that I have done with the Skills sections, but with links to my social media and of course to my personal website. Also we can add some Github Stats to our Readme Profile, like this. In the description of the video you will have the link to this Github Repository where all of these are explained in detail. But I’m not going to put this Github Stats on my Readme Profile because I want to be more simple. Finally we commit the changes and we will have our Readme profile on Github.";
    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Titulo>GitHub Profile</Titulo>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-VDjGbJRWoI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <Parrafo>{GitHub}</Parrafo>
        </VStack>
    );
};