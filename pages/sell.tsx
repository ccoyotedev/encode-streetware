import { ReactElement, useEffect, useState } from "react";
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
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";
import AssetCard from "components/asset-card";
import { useWeb3React } from "@web3-react/core";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

const Sell = () => {
  const { account, library } = useWeb3React();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [solanaNftList, setSolanaNftList] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const nftsmetadata = await Metadata.findDataByOwner(
        connection,
        publicKey || ""
      );
      const listofUris = nftsmetadata
        .map((data) => data.data.uri && data.data.uri + "?ext=json")
        .filter((uri) => uri != "");

      const nftDataList = await Promise.all(
        listofUris.map(async (uri: string) => {
          const resp = await fetch(uri);
          return resp.json();
        })
      );
      setSolanaNftList(nftDataList);
    };

    fetchData().catch(console.error);
  }, [connection, publicKey]);

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
          {solanaNftList?.map((data: any) => {
            const { image } = data;
            return (
              <AssetCard src={image} key={Math.random()} title="" cost="" />
            );
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
