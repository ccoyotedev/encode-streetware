import type { ReactElement } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import {
  } from '@chakra-ui/react'
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'
// import { useWeb3 } from '../contexts/useWeb3'


export const getStaticProps: GetStaticProps = async (context) => {
  // const { state } = useWeb3()
}

const Sell = ( props: any) => {
  return (
    <></>
  )
}
   

Sell.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout title="sell">
        <NestedLayout>{page}</NestedLayout>
      </Layout>
    )
}
    
export default Sell