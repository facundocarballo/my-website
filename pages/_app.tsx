import {ChakraProvider} from '@chakra-ui/react';
import theme from '../styles/theme';
import {FacundoProvider} from '../src/context/provider';



function MyApp({ Component, pageProps }) {

  return (
    <>
      <FacundoProvider>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
      </FacundoProvider>
    </>
      
  )
}

export default MyApp
