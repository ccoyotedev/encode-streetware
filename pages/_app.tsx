import type { ReactElement, ReactNode } from 'react';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from 'next';
import Web3ConnectProvider from "components/widgets/WalletConnect";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      <Web3ConnectProvider>
      {getLayout(<Component {...pageProps} />)}
      </Web3ConnectProvider>
    </ChakraProvider>
  );
}

export default MyApp;
