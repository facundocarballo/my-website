import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import {ButtonStyles as Button, ContainerStyle as Container} from './buttonStyles';


const config : ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

const colors = {
    bgDark: '#1A202C',
    bgLight: '#EDF2F7'
}

const components = {Button, Container};

const theme = extendTheme({config, colors, components});

export default theme;