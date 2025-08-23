import Communicative from "@/components/Communicative/Communicative";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import DualLan from "@/components/DualLan/DualLan";
import FourDependentDisplay from "@/components/FourDependentDisplay/FourDependentDisplay";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import RigPlusBanner from "@/components/RigPlusBanner/RigPlusBanner";
import assest from "@/json/assest";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <RigPlusBanner />
      <CoreToEveryThing bgImg={assest?.core_to_everything} />
      <FourDependentDisplay />
      <DualLan />
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
