import Communicative from "@/components/Communicative/Communicative";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import DualStorage from "@/components/DualStorage/DualStorage";
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
      <Eon13ProBanner
        banner_bg={assest?.eon13_pro_x_bg}
        description="An Ultra-Compact Micro PC with uninterrupted connectivity for
        uninterrupted data flow."
        product_img={assest?.eon13_pro_x_img}
      />
      <CoreToEveryThing bgImg={assest?.core_to_everything_eon_pro13} />
      <TwoIndependentDisplay
        bgImg={assest?.four_display_bg}
        mainTitle="independent"
        subTitle="four"
        description="With 2 × HDMIs, Display Port & Type C, run multiple applications side by side without performance drops or display limitations along with 4K Ultra HD stunning experience."
      />
      <DualStorage />
      <TwoLanSection />
      <NextGenConectivity />
      <Communicative
        banner_bg={assest?.coummunicative_wire_pro}
        description="When uptime matters and Wi-Fi wavers, COM ports stay solid. Simple, stable & reliable route of
        communication notably from PC to industrial controllers, sensors, routers and PoS systems."
      />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
};

export default Index;
