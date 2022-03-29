import { useProvider } from "../context/provider";
import { FilterNav, FilterProps } from "./filterNav";
import { HStack, Box, Image, Button, Avatar, VStack, Text, Tooltip } from "@chakra-ui/react";
import { getAuth, signOut } from 'firebase/auth';

export const FilterNavProjects = ({isBlog, es}: FilterProps) => {
    const {user, setUser} = useProvider();
    const auth = getAuth();
    const handleSignOut = async () => {
        await signOut(auth);
        setUser(null);
      };
    return(
        <>
            <HStack w='full' display={{lg: 'flex', md: 'flex', sm: 'none', base: 'none'}}>
            <FilterNav isBlog={isBlog} es={es}/>
            <Box w='10px' />
            {
                user.photoURL != null ?
                <Image
                src={user.photoURL}
                alt='photo'
                borderRadius='full'
                boxSize='50px'
                />
                :
                <Avatar
                name={user.displayName}
                />
            
            }
            
            <Button variant='headers' onClick={handleSignOut}>
                {es ? 'Cerrar Sesión' : 'Sign Out'}
            </Button>
            <Box w='10px' />
        </HStack>

        <HStack w='full' display={{lg: 'none', md: 'none', sm: 'flex', base: 'flex'}}>
            <FilterNav isBlog={isBlog} es={es}/>
            {
                user.photoURL != null ?
                <Image
                src={user.photoURL}
                alt='photo'
                borderRadius='full'
                boxSize='20px'
                />
                :
                <Avatar
                name={user.displayName}
                />
            
            }
            <VStack>
                <Button variant='headers' onClick={handleSignOut} size='xs'>
                    {es ? 'Cerrar Sesión' : 'Sign Out'}
                </Button>
            </VStack>
            
            <Box w='10px' />
        </HStack>
        </>
    );
};
