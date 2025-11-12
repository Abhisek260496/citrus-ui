import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import Eon13ProBanner from "@/components/Eon13ProBanner/Eon13ProBanner";
import GbLanSec from "@/components/GbLanSec/GbLanSec";
import NextGenConectivity from "@/components/NextGenConectivity/NextGenConectivity";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import TwoIndependentDisplay from "@/components/TwoIndependentDisplay/TwoIndependentDisplay";
import assest from "@/json/assest";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <Eon13ProBanner
        banner_bg={assest?.eon_14pro_banner_bg}
        description="Versatility that aligns with Vision of Creative Computing"
        product_img={assest?.eon_14pro_img}
      />
      <CoreToEveryThing
        bgImg={assest?.eon_14_pro_core}
        bgText="An ideal central power for advanced AI acceleration, smart edge applications & immersive multimedia experiences."
      />
      <TwoIndependentDisplay
        bgImg={assest?.four_display_bg}
        mainTitle="independent"
        subTitle="four"
        description="With 2 × HDMIs, Display Port & Type C, run multiple applications side by side without performance drops or display limitations along with 4K Ultra HD stunning experience."
      />
      <CoreToEveryThing
        bgImg={assest?.intel_arc_graphic_img}
        bgText="
       Along with stunning graphics performance by Intel Arc Graphics experience smoother multitasking, faster app launches and better performance in heavy workloads like gaming, video editing, and 3D rendering with DDR5
       "
        isFullWidth
        isReversed
        subTitle=" Graphics meets DDR5"
        mainTitle="Intel Arc"
      />
      <GbLanSec />
      <NextGenConectivity />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
};

export default Index;
