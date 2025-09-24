import assest from "@/json/assest";
import { CaseStudyUIWrapper } from "@/styles/styledComponents/CaseStudyUIWrapper";

import Image from "next/image";
import DigitalSignageComp from "./DigitalSignageComp";
import IndustrialComp from "./IndustrialComp";
import SmartClassroom from "./SmartClassroom";
import SuccessStoryComp from "./SuccessStoryComp";

function CaseStudyUI() {
  return (
    <CaseStudyUIWrapper>
      <figure>
        <Image
          src={assest.caseStudyBnrImg}
          width={2055}
          height={1150}
          alt="caseStudyBnrImg"
        />
      </figure>
      <DigitalSignageComp />
      <SmartClassroom />
      <SuccessStoryComp />
      <IndustrialComp />
    </CaseStudyUIWrapper>
  );
}

export default CaseStudyUI;
