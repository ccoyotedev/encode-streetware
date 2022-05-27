import type { ReactElement } from "react";
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";
import { useWeb3React } from "@web3-react/core";
import { providers } from "ethers";

const AssetView = () => {
  const { library } = useWeb3React<providers.Web3Provider>();

  return <></>;
};

AssetView.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="view details">
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default AssetView;
