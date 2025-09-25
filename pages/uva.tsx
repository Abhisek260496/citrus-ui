import AccessSec from "@/components/AccessSec/AccessSec";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import DualStorage from "@/components/DualStorage/DualStorage";
import IndependentSec from "@/components/IndependentSec/IndependentSec";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import RicherSec from "@/components/RicherSec/RicherSec";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Index() {
  return (
    <Wrapper>
      <InnerBanner bannerVideo={assest.uvaVideo} />
      <CoreToEveryThing bgImg={assest?.core_to_everything_eon_slim} />
      <IndependentSec/>
      <DualStorage/>
      <RicherSec/>
      <AccessSec/>
    </Wrapper>
  );
}
