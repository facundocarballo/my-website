import { useColorModeValue } from "@chakra-ui/color-mode";
import { ExternalLinkIcon, InfoIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { HStack, Text, VStack, Spacer, Link, Box } from "@chakra-ui/layout";
import {
  Divider,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { IExperienceProps } from "../functions/experience";
import { GITGUB_IMG, YOUTUBE_IMG } from "../functions/images";
import { CarrouselImages } from "./carrousel";

export const ExperienceCard = ({ props }: IExperienceProps) => {
  // Attributes
  const bg = useColorModeValue("gray.300", "gray.600");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  // Context
  // Methods
  // Component
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {props.title}
            </AlertDialogHeader>

            <AlertDialogBody>
              {props.description.map((desc, idx) => {
                if (idx == 0) {
                  return (
                    <div key={idx}>
                      <Text color="white">{desc}</Text>
                      <Box h="10px" />
                    </div>
                  );
                }

                return (
                  <div key={idx}>
                    <Divider />
                    <Box h="10px" />
                    <Text color="white">{desc}</Text>
                    <Box h="10px" />
                    <Divider />
                  </div>
                );
              })}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Ok
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <VStack
        minH={{ lg: "380px", md: "380px", sm: "380px", base: "300px" }}
        minW={{ lg: "500px", md: "500px", sm: "400px", base: "300px" }}
        bg={bg}
        borderRadius="10px"
      >
        <Box h="10px" />
        <HStack w="full">
          <Spacer />
          <Link href={props.href} isExternal>
            <Text fontSize="18px">{props.title}</Text>
          </Link>
          <Spacer />
          <Button w="10px" onClick={onOpen}>
            <InfoIcon />
          </Button>
          <Box w="10px" />
        </HStack>
        <Divider />
        <Spacer />
        <HStack w="90%">
          <CarrouselImages images={props.images} />
        </HStack>
        <Spacer />
        <Spacer />
        <Divider />
        <HStack w="90%">
          {props.languages.map((lang, idx) => (
            <Image key={idx} src={lang} w="30px" h="30px" />
          ))}
          <Spacer />
          {props.repo != null ? (
            <Link href={props.repo} isExternal>
              {" "}
              <Image src={GITGUB_IMG} w="30px" h="30px" />{" "}
            </Link>
          ) : null}
          {props.youtube != null ? (
            <Link href={props.youtube} isExternal>
              {" "}
              <Image src={YOUTUBE_IMG} w="30px" h="20px" />{" "}
            </Link>
          ) : null}
          {props.href != null ? (
            <Link href={props.href} isExternal>
              <ExternalLinkIcon />
            </Link>
          ) : null}
        </HStack>
        <Box h="10px" />
      </VStack>
    </>
  );
};
