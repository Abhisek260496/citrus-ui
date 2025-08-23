import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import EonSlimBanner from "@/components/EonSlimBanner/EonSlimBanner";
import PalmSizeSection from "@/components/PalmSizeSection/PalmSizeSection";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import TwoIndependentDisplay from "@/components/TwoIndependentDisplay/TwoIndependentDisplay";
import UltraBg from "@/components/UltraBg/UltraBg";
import assest from "@/json/assest";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <EonSlimBanner />
      <CoreToEveryThing bgImg={assest?.core_to_everything_eon_slim} />
      <TwoIndependentDisplay />
      <PalmSizeSection />
      <UltraBg />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
};

export default Index;
