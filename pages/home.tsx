import type { ReactElement } from 'react'
import {
   SimpleGrid,
  } from '@chakra-ui/react'
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'
import { dataList, IList } from 'utils/data-list'
import AssetCard from 'components/asset-card'

const Home = () => (
    <SimpleGrid columns={[2, null, 5]} spacing='5px'>
       {dataList.map(( data: IList) => {
            const {id, src, title, cost} = data;
            return (
            <AssetCard
                key={id}
                src={src}
                title={title}
                cost={cost}
            />
           )})
        }  
  </SimpleGrid>
)

Home.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        <NestedLayout>{page}</NestedLayout>
      </Layout>
    )
  }
    
export default Home