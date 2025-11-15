import DualStorage from "@/components/DualStorage/DualStorage";
import HighBandwidthSec from "@/components/HighBandwidthSec/HighBandwidthSec";
import IntelGraphicSec from "@/components/IntelGraphicSec/IntelGraphicSec";
import OpsBanner from "@/components/OpsBanner/OpsBanner";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import UltraBg from "@/components/UltraBg/UltraBg";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <OpsBanner />
      <IntelGraphicSec />
      <HighBandwidthSec />
      <DualStorage />
      <UltraBg />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
};

export default Index;
