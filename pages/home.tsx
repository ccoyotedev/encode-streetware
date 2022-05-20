import type { ReactElement } from "react";
import { SimpleGrid, Stack, Heading } from "@chakra-ui/react";
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";
import { dataList, IList } from "utils/data-list";
import AssetCard from "components/asset-card";

const Home = () => {
  const heroText = "Buy and Sell NFTees";
  const heroSubtext = "Discover Creators and their products";
  return (
    <>
      <Stack
        align={{ base: "center", md: "center" }}
        textAlign={{ base: "center", md: "center" }}
        mb="1%"
      >
        <Heading
          as="h1"
          size="2xl"
          noOfLines={1}
          fontWeight="bold"
          color="black"
          pb="5px"
        >
          {heroText}
        </Heading>
        <Heading
          as="h4"
          size="lg"
          noOfLines={1}
          fontWeight="bold"
          color="black"
          pb="5px"
        >
          {heroSubtext}
        </Heading>
      </Stack>
      <SimpleGrid columns={[2, null, 5]} spacing="5px" mt="2%">
        {dataList.map((data: IList) => {
          const { id, src, title, cost } = data;
          return <AssetCard key={id} src={src} title={title} cost={cost} />;
        })}
      </SimpleGrid>
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="home">
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Home;