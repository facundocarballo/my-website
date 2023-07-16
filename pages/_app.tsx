import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import {FacundoProvider} from '../src/context/provider';
import { GOOGLE_ANALYTICS_ID } from '../src/functions/keys';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../src/functions/gtag'

// Google Analytics
import Script from 'next/script'


function MyApp({ Component, pageProps }) {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <FacundoProvider>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
      </FacundoProvider>
          
    </>
      
  )
}

export default MyApp
