import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import EasySec from "@/components/EasySec/EasySec";
import EonSlimBanner from "@/components/EonSlimBanner/EonSlimBanner";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import TwoIndependentDisplay from "@/components/TwoIndependentDisplay/TwoIndependentDisplay";
import UltraBg from "@/components/UltraBg/UltraBg";
import assest from "@/json/assest";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <EonSlimBanner bannerImage={assest?.eon_slim_e_banner} bannerText="Accelerating Work with Micro Precision"/>
      <CoreToEveryThing bgImg={assest?.eon_slim_e_core_to_everything} bgText="A power-efficient & budget-friendly quad-core processor ideal for smooth multitasking and everyday computing."/>
      <TwoIndependentDisplay
        bgImg={assest?.two_independent_displays_bg}
        mainTitle="independent"
        subTitle="two"
        description="The seamless transition between displays ensures a more efficient workflow without the hassle of constantly switching tabs or windows."
      />
      <EasySec/>
      <UltraBg />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
};

export default Index;
