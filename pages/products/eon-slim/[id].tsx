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
      <EonSlimBanner
        bannerImage={assest?.eon_slim_banner}
        bannerText="Accelerating Work with Micro Precision"
      />
      <CoreToEveryThing bgImg={assest?.core_to_everything_eon_slim} />
      <TwoIndependentDisplay
        bgImg={assest?.two_independent_displays_bg}
        mainTitle="independent"
        subTitle="two"
        description="The seamless transition between displays ensures a more efficient workflow without the hassle of constantly switching tabs or windows."
      />
      <PalmSizeSection />
      <UltraBg />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
};

export default Index;
