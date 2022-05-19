import type { ReactElement } from 'react'
import Link from 'next/link'
import {
   Box,
   SimpleGrid,
   Input,
   Container,
  } from '@chakra-ui/react'
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'

const Sell = () => (
    <SimpleGrid columns={[2, null, 3]} spacing='10px'>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    </SimpleGrid>
)

Sell.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        <NestedLayout>{page}</NestedLayout>
      </Layout>
    )
}
    
export default Sell