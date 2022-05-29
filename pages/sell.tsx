import type { ReactElement } from "react";
import {
  Heading,
  Text,
  HStack,
  Button,
  ButtonGroup,
  SimpleGrid,
  VStack,
  Box,
} from "@chakra-ui/react";
import { dataListShort, IList } from "utils/data-list";
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";
import AssetCard from "components/asset-card";
import { useWeb3React } from "@web3-react/core";
import { providers } from "ethers";

const Sell = () => {
  const { library } = useWeb3React<providers.Web3Provider>();

  return (
    <>
      <HStack spacing={30} p={18}>
        <VStack w="70%" alignItems="flex-start">
          <Heading pb="5px">List Your Item For Sale</Heading>
          <Heading size="lg" color="tomato" pb="5px">
            Mint your wearable design and get royalty payment
          </Heading>
          <ButtonGroup variant="outline" spacing="6">
            <Button colorScheme="teal" size="md">
              My Items
            </Button>
            <Button colorScheme="teal" size="md">
              My Listings
            </Button>
          </ButtonGroup>
        </VStack>
        <Box borderWidth="1px" borderRadius="lg" p={6}>
          <Text color="gray.500" noOfLines={1}>
            How to List Your NFT and Sell a Product:
          </Text>
        </Box>
      </HStack>
      <VStack w="70%">
        <SimpleGrid columns={3} spacing="5px" mt="2%">
          {dataListShort.map((data: IList) => {
            const { id, src, title, cost } = data;
            return <AssetCard key={id} src={src} title={title} cost={cost} />;
          })}
        </SimpleGrid>
      </VStack>
    </>
  );
};

Sell.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="sell">
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Sell;
