import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";

const AssetView = () => {
  const router = useRouter();

  useEffect(() => {
    const { src, title, cost } = router.query;
  }, [router.query]);

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
