import React, { ReactNode } from "react";
import {
  Flex,
  Button,
  Container,
  Input,
  Divider,
  Icon,
  HStack,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Flex
        as="nav"
        position="fixed"
        backgroundColor="white"
        py={3}
        px={8}
        w="100%"
        justify="space-between"
        boxShadow={"sm"}
      >
        <HStack align="end">
          <Icon
            color="#00adb5"
            viewBox="0 0 163.83691294242863 30.999999999999996"
            width="163.836px"
            height="30.99px"
            transform="matrix(1.58524, 0, 0, 1.58524, 45.6375, -3.18518)"
            preserveAspectRatio="xMidYMid meet"
            text-align="left"
          >
            <path
              fill="#00adb5"
              d="M15.088 13.6328 l-1.4551 6.3574 l-4.541 0 l-1.9336 -6.3574 l-0.22461 0 l-1.4746 6.3574 l-4.5996 0 l1.4746 -6.3574 l-0.88867 0 l1.8848 -8.1836 l5.3613 0 l1.582 5.1367 l1.2012 -5.1367 l4.6191 0 l-1.8945 8.1836 l0.88867 0 z M25.476942871093748 13.6719 l0.97656 0 l-0.12695 0.5957 l-5.0391 0 l-1.3281 5.7715 l-4.9121 0 l1.4844 -6.3672 l-0.99609 0 l1.9043 -8.2422 l10.371 0 l-0.85938 3.7012 l-5.459 0 l-0.3418 1.4355 l5.0293 0 z M35.5927763671875 13.3594 l-1.4844 6.6797 l-4.9512 0 l1.5234 -6.6797 l-0.88867 0 l0.98633 -4.2773 l-3.9063 0 l0.85938 -3.7012 l12.676 0 l-0.83008 3.7012 l-3.8965 0 l-0.95703 4.2773 l0.86914 0 z M39.89776298828125 13.6719 l-0.99609 0 l1.9141 -8.2422 l10.459 0 l-0.83984 3.7012 l-5.5762 0 l-0.29297 1.25 l5.127 0 l-0.75195 3.291 l0.99609 0 l-0.087891 0.39063 l-5.1367 0 l-0.51758 2.2852 l5.5566 0 l-0.83984 3.6914 l-10.479 0 z M51.253658984375 13.6719 l-0.99609 0 l1.9141 -8.2422 l10.459 0 l-0.83984 3.7012 l-5.5762 0 l-0.29297 1.25 l5.127 0 l-0.75195 3.291 l0.99609 0 l-0.087891 0.39063 l-5.1367 0 l-0.51758 2.2852 l5.5566 0 l-0.83984 3.6914 l-10.479 0 z M73.99635498046875 13.3594 c0.56641 2.0508 -1.1328 4.4727 -2.7051 5.5371 c-3.0859 2.0215 -7.1582 1.6992 -10.313 0.078125 l0.91797 -4.0625 l1.5137 0 c0.19531 2.0996 4.8926 2.9688 5.3711 0.89844 c0.23438 -1.0254 -3.4473 -1.3086 -4.6777 -2.2754 c-0.068359 -0.058594 -0.14648 -0.11719 -0.20508 -0.17578 l-0.89844 0 c-0.97656 -0.91797 -1.0645 -2.1387 -0.78125 -3.4082 c1.1914 -5.2051 8.2617 -5.7227 12.344 -3.6621 l-0.9082 3.9551 l-1.5234 0 c0.097656 -1.4844 -4.3945 -2.5 -4.8145 -0.71289 c-0.2832 1.3867 4.2676 0.97656 5.5273 3.1738 c0.10742 0.19531 0.19531 0.42969 0.25391 0.6543 l0.89844 0 z"
            />
          </Icon>
        </HStack>
        <HStack w="100%" mr="5px">
          <Input placeholder="search designs" />
        </HStack>
        <HStack>
          <Button colorScheme="teal" variant="ghost">
            <Link href="/home">Home</Link>
          </Button>
          <Button colorScheme="teal" variant="ghost">
            <Link href="/sell">Sell</Link>
          </Button>
        </HStack>
      </Flex>
    </header>
    <Divider />
    <Container minWidth="100%" marginTop="5%">
      {children}
    </Container>
  </>
);

export default Layout;