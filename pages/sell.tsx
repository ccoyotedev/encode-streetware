import type { ReactElement } from "react";
import {} from "@chakra-ui/react";
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";
import { useWeb3React } from "@web3-react/core";
import { providers } from "ethers";

const Sell = () => {
  const { library } = useWeb3React<providers.Web3Provider>();

  return <></>;
};

Sell.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="sell">
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Sell;
