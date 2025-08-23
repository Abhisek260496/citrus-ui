import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import Eon13ProBanner from "@/components/Eon13ProBanner/Eon13ProBanner";
import NextGenConectivity from "@/components/NextGenConectivity/NextGenConectivity";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import TwoIndependentDisplay from "@/components/TwoIndependentDisplay/TwoIndependentDisplay";
import TwoLanSection from "@/components/TwoLanSection/TwoLanSection";
import assest from "@/json/assest";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <Eon13ProBanner />
      <CoreToEveryThing bgImg={assest?.core_to_everything_eon_pro13} />
      <TwoIndependentDisplay
        bgImg={assest?.four_display_bg}
        mainTitle="independent"
        subTitle="four"
        description="With 2 × HDMIs, Display Port & Type C, run multiple applications side by side without performance drops or display limitations along with 4K Ultra HD stunning experience."
      />
      <TwoLanSection />
      <NextGenConectivity />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
};

export default Index;
