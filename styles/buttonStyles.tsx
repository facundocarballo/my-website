import { useColorModeValue } from '@chakra-ui/color-mode';
export const ContainerStyle = {
    variants: {
        cardInfo: () => ({
           // bgGradient: useColorModeValue("linear(to-b, gray.100, blue.100)", "linear(to-b, gray.900, blue.700)"),
            color: useColorModeValue('bgDark', 'bgLight'),
            _hover: {
                transition: '.5s',
                transform: 'scale(1.01)',
            }
        })
    }
}
export const ButtonStyles = {
    baseStyle: {},
    sizes: {},
    variants: {
        headers: () => ({
            bg: useColorModeValue('bgLight', 'bgDark'),
            color: useColorModeValue('bgDark', 'bgLight'),
            margin: '2px',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.02)',
                bg: useColorModeValue('gray.300', 'gray.600'),
            }
        }),
        callToAction: () => ({
            bg: useColorModeValue('#2B6CB0', '#3182CE'),
            color: 'bgLight',
            margin: '2px',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.02)',
                bg: useColorModeValue('#3182CE', '#2B6CB0'),
            }
        }),
        signIn: () => ({
            bg: useColorModeValue('gray.300', 'gray.600'),
            color: useColorModeValue('gray.600', 'gray.300'),
            margin: '2px',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.05)',
            }
        }),
        buttonWalletSelect: () => ({
            bg: useColorModeValue('blue.400', 'blue.500'),
            color: useColorModeValue('gray.200', 'gray.800'),
            margin: '2px',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.05)'
            }
        }),
        buttonWallet: () => ({
            bg: useColorModeValue('gray.100', 'gray.800'),
            color: useColorModeValue('gray.800', 'gray.300'),
            margin: '2px',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.05)'

            }
        }),
        addIcon: () => ({
            bg: 'green.400',
            margin: '2px',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.05)'
            }
        }),
        minusIcon: () => ({
            bg: 'red.400',
            margin: '2px',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.05)'
            }
        }),
        addCurrency: () => ({
            bg: useColorModeValue('gray.800', 'gray.200'),
            color: useColorModeValue('gray.200', 'gray.800'),
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.05)'
            }
        }),
        wpp: () => ({
            bg: 'whatsapp.500',
            color: 'white',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.02)'
            }
        })
    },
    defaultProps: {}
}