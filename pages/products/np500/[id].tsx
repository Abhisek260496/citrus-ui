import Communicative from "@/components/Communicative/Communicative";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import GraphicCardSec from "@/components/GraphicCardSec/GraphicCardSec";
import IndependentDisplay from "@/components/IndependentDisplay/IndependentDisplay";
import Np500Banner from "@/components/Np500Banner/Np500Banner";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import assest from "@/json/assest";
import { productList } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <Np500Banner />
      <CoreToEveryThing bgImg={assest?.core_to_everything} />
      <IndependentDisplay />
      <GraphicCardSec />
      <Communicative
        banner_bg={assest?.coummunicative_wire}
        description="When uptime matters and Wi-Fi wavers, the serial stays solid. Simple, stable & reliable route of communication notably from PC to industrial controllers, sensors, routers and PoS systems."
      />
      <RelatedProducts productList={productList} />
    </Wrapper>
  );
};

export default Index;
