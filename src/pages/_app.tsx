import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import { CSSReset, useColorModeValue } from '@chakra-ui/react';

import themeattempt from "../styles/themeattempt";
import { createRoot } from "react-dom/client";
import MainLayout from '../components/MainLayout';
import { Analytics } from "@vercel/analytics/react";


function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return <></>;

  return (
    <>

      <ChakraProvider theme={themeattempt}>


        <CSSReset />

        <MainLayout >
          <Component {...pageProps} />
          <Analytics />
        </MainLayout>
      </ChakraProvider>
    </>
  );
}

export default MyApp
