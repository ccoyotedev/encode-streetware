import type { ReactElement } from "react";
import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";
import {
  VStack,
  Heading,
  HStack,
  IconButton,
  Box,
  Button,
  ButtonGroup,
  Image,
  Text,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

type Props = {
  src?: string;
  title?: string;
  cost?: string;
  id?: number;
};

const AssetView = ({ src, title, cost }: Props) => {
  const [assetTitle, setAssetTitle] = useState("");
  const [assetSrc, setAssetSrc] = useState("");
  const [assetCost, setAssetCost] = useState("");

  useEffect(() => {
    title && setAssetTitle(title);
    src && setAssetSrc(src);
    cost && setAssetTitle(cost);
  }, [title, src, cost]);

  return (
    <>
      <HStack
        alignItems="flex-start"
        justifyContent={"center"}
        spacing={35}
        pt={10}
      >
        <Box boxShadow={"lg"} borderRadius="lg">
          <Image src={src} maxHeight="650px" />
        </Box>
        <VStack alignItems="flex-start">
          <Heading as="h4" size="md">
            {title}
          </Heading>
          <Heading as="h5" size="sm" color="gray.600">
            {cost}
            <Image display="inline" src="/eth.svg" pl="3px" width={"11px"} />
          </Heading>
          <Heading as="h5" size="sm">
            Unisex Comfort Tee
          </Heading>
          <Text fontWeight="bold" color="gray.600">
            Colors
          </Text>
          <HStack pb="3%">
            <IconButton isRound aria-label="white" colorScheme="gray" />
            <IconButton isRound aria-label="teal" colorScheme="teal" />
            <IconButton isRound aria-label="red" colorScheme="red" />
            <IconButton isRound aria-label="bluw" colorScheme="blue" />
            <IconButton isRound aria-label="yellow" colorScheme="yellow" />
          </HStack>
          <ButtonGroup variant="outline" spacing="3" pb="3%">
            <Button>XS</Button>
            <Button>Small</Button>
            <Button>Medium</Button>
            <Button>Large</Button>
            <Button>XL</Button>
          </ButtonGroup>
          <HStack width={"100%"} pb="3%">
            <Select size="sm">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
            <Button minWidth={"50%"}>Add to cart</Button>
          </HStack>
          <Accordion allowMultiple width="100%" mb="20px">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Product Details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Slim fit, unisex. 100% Cotton
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </HStack>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { src, title, cost } = context.query;
  src = String(src);
  title = String(title);
  cost = String(cost);
  return {
    props: {
      src,
      title,
      cost,
    },
  };
};

AssetView.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="view details">
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default AssetView;
