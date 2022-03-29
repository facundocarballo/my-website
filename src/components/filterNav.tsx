import React from 'react';
import { HStack, Button, Spacer, Box, Container, Input, InputGroup, InputLeftElement, useColorModeValue, Select } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useProvider } from '../../src/context/provider';

export interface FilterProps {
    isBlog: boolean,
    es: boolean,
}

export const FilterNav = ({isBlog, es}: FilterProps) => {
    const [filter, setFilter] = React.useState(0);
    const colorActive = useColorModeValue('gray.300', 'gray.600');
    const color = useColorModeValue('gray.100', 'gray.800');
    // Cada vez que agregamos un proyecto nuevo con otro Framework debemos agregarlo.
    const items = ['All', 'React', 'Solidity'];
    const {filterBlogsBySearch, filterBlogsByFramework, filterProjectsByFramework, filterProjectsBySearch } = useProvider();

    // Funciones
    function handleOnChange(e) { 
        console.log(`Handle: ${isBlog}`);
        isBlog ? filterBlogsBySearch(e.target.value) : filterProjectsBySearch(e.target.value);
    }

    function handleFilter(index: number) {
        console.log(`Handle: ${isBlog}`);
        setFilter(index);
        isBlog ? filterBlogsByFramework(items[index]) : filterProjectsByFramework(items[index]);
    }


    return (
        <HStack w='full'>
            <Box w='10px'/>
            <Select>
                {
                    items.map((item, idx) => 
                        <option key={idx} onClick={() => handleFilter(idx)}>
                            {item}
                        </option>
                    )
                }
            </Select>
            <Spacer />
            <Container>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" >
                        <SearchIcon color='gray.400'/> 
                    </InputLeftElement>
                    <Input type='search' placeholder='Search' onChange={handleOnChange}/>
                </InputGroup>
            </Container>
        </HStack>
    );
}