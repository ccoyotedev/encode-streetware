import React, { ReactNode } from 'react'
import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Container,
  Input,
  Divider
} from '@chakra-ui/react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
        <Flex as="header" position="fixed" backgroundColor="white" w="100%">
            <Input placeholder='Basic usage' />
            <Button colorScheme='teal' variant='ghost'>
            Discover
            </Button>
            <Button colorScheme='teal' variant='ghost'>
                Sell
            </Button>
        </Flex>
    </header> 
    <Divider />
    <Container  minWidth="100%" marginTop="5%">
        {children}
    </Container>
</>
)

export default Layout