import React, { ReactNode } from 'react'
import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Container,
  Input
} from '@chakra-ui/react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const NestedLayout = ({ children }: Props) => (
    <>
        {children}
    </>
)

export default NestedLayout