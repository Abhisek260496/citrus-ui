import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import DisplaySec from "@/components/DisplaySec/DisplaySec";
import EasySec from "@/components/EasySec/EasySec";
import HighSec from "@/components/HighSec/HighSec";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import ModeSec from "@/components/ModeSec/ModeSec";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";

const Xtreme = () => {
  return (
    <Wrapper>
      <InnerBanner bannerVideo={assest.uvaVideo} />
      <CoreToEveryThing bgImg={assest?.core_to_everything_eon_slim} />
      <ModeSec/>
      <HighSec/>
      <DisplaySec/>
      <EasySec/>
    </Wrapper>
  );
};

export default Xtreme;
