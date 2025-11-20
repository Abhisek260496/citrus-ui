import AccessSec from "@/components/AccessSec/AccessSec";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import DualStorage from "@/components/DualStorage/DualStorage";
import IndependentSec from "@/components/IndependentSec/IndependentSec";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import RicherSec from "@/components/RicherSec/RicherSec";
import assest from "@/json/assest";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Index() {
  return (
    <Wrapper>
      <InnerBanner bannerVideo={assest.uvaVideo} />
      <CoreToEveryThing bgImg={assest?.core_to_everything_eon_slim} />
      <IndependentSec />
      <DualStorage />
      <RicherSec />
      <AccessSec />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
}
