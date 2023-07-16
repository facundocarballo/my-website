import { HStack, VStack, Box, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { ExperienceCard } from "../../components/experienceCard";
import { getExperience } from "../../functions/experience";

export const Experience = () => {
  // Attributes
  // Context
  // Methods
  // Component
  return (
    <>
      <ExperienceDesktop />
      <ExperienceMobile />
    </>
  );
};

const ExperienceDesktop = () => {
  // Attributes
  const experience = getExperience();
  // Context
  // Methods
  // Component
  return (
    <VStack
      w="full"
      display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
    >
      <HStack w="full">
        <Box w="80px" />
        <VStack w="35%">
          <Text fontSize={[0, 0, "20px", "25px"]} textAlign="justify">
            This last two years I was working as Freelancer making Software for
            Decentralice Aplications for differents Blockchains. That is my
            strong skill, work with Smart Contracts and connect them with a web
            so the user can interact with those Smart Contracts propertly.
          </Text>
          <Text fontSize={[0, 0, "20px", "25px"]} textAlign="justify">
            In the other hand, I have a lot of knowledge on Software Development
            in general. On my GitHub Repo you will find personal projects and
            school projects; where I handle different programming languages like
            C, C++, Java, Python and Go.
          </Text>
        </VStack>
        <Spacer />
        <Image
          boxSize={[0, 0, 210, 275]}
          src="https://i.ibb.co/ZKddNF1/likeMoji.webp"
          alt="Hello There"
        />
        <Box w="80px" />
      </HStack>
      <Box h="10px" />
      <HStack w="full" overflowX="scroll">
        {experience.length < 5 ? <Spacer /> : null}

        {experience.map((exp, idx) => (
          <ExperienceCard key={idx} props={exp} />
        ))}

        {experience.length < 5 ? <Spacer /> : null}
      </HStack>
    </VStack>
  );
};

const ExperienceMobile = () => {
  // Attributes
  const experience = getExperience();
  // Context
  // Methods
  // Component
  return (
    <VStack
      w="full"
      display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}
    >
      <Image
        boxSize={[210, 270, 0, 0]}
        src="https://i.ibb.co/ZKddNF1/likeMoji.webp"
        alt="Hello There"
      />
      <Text fontSize={["16px", "20px", 0, 0]} textAlign="justify" p={3}>
        This last two years I was working as Freelancer making Software for
        Decentralice Aplications for differents Blockchains. That is my strong
        skill, work with Smart Contracts and connect them with a web so the user
        can interact with those Smart Contracts propertly.
      </Text>
      <Text fontSize={["16px", "20px", 0, 0]} textAlign="justify" p={3}>
        In the other hand, I have a lot of knowledge on Software Development in
        general. On my GitHub Repo you will find personal projects and school
        projects; where I handle different programming languages like C, C++,
        Java, Python and Go.
      </Text>
      <Box h="10px" />
      <HStack w="full" overflowX="scroll">
        {experience.length < 5 ? <Spacer /> : null}

        {experience.map((exp, idx) => (
          <ExperienceCard key={idx} props={exp} />
        ))}

        {experience.length < 5 ? <Spacer /> : null}
      </HStack>
    </VStack>
  );
};
