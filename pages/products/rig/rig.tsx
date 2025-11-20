import ConnectionSec from "@/components/ConnectionSec/ConnectionSec";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import EasySec from "@/components/EasySec/EasySec";
import HandelSec from "@/components/HandelSec/HandelSec";
import LanSec from "@/components/LanSec/LanSec";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import RigBanner from "@/components/RigBanner/RigBanner";
import assest from "@/json/assest";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";
import React from "react";

const Rig = () => {
  return (
    <Wrapper>
      <RigBanner />
      <CoreToEveryThing bgImg={assest?.coreBack} />
      <HandelSec />
      <LanSec />
      <EasySec />
      <ConnectionSec />
      <RelatedProducts productList={productList2} />
    </Wrapper>
  );
};

export default Rig;
