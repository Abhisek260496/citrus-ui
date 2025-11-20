import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import DisplaySec from "@/components/DisplaySec/DisplaySec";
import EasySec from "@/components/EasySec/EasySec";
import HighSec from "@/components/HighSec/HighSec";
import ModeSec from "@/components/ModeSec/ModeSec";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import XtremeBanner from "@/components/XtremeBanner/XtremeBanner";
import assest from "@/json/assest";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";

const Xtreme = () => {
  return (
    <Wrapper>
      <XtremeBanner />
      <CoreToEveryThing bgImg={assest?.core_to_everything_eon_slim} />
      <ModeSec />
      <HighSec />
      <DisplaySec />
      <EasySec />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
};

export default Xtreme;
