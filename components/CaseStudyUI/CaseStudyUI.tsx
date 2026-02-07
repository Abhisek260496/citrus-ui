import assest from "@/json/assest";
import { CaseStudyUIWrapper } from "@/styles/styledComponents/CaseStudyUIWrapper";

import { getCaseStudy } from "@/api/functions/cms.api";
import Loader from "@/ui/Loader/Loder";
import Image from "next/image";
import { useQuery } from "react-query";
import DigitalSignageComp from "./DigitalSignageComp";
import IndustrialComp from "./IndustrialComp";
import SmartClassroom from "./SmartClassroom";
import SuccessStoryComp from "./SuccessStoryComp";

function CaseStudyUI() {
  const { data: caseStudyData, isLoading: csrLoading } = useQuery({
    queryKey: ["getCaseStudy"],
    queryFn: () => getCaseStudy()
  });

  return (
    <CaseStudyUIWrapper>
      {csrLoading && <Loader />}
      <figure className="caseStudyBnrImg">
        <Image
          src={assest.case_study_banner}
          width={2055}
          height={1150}
          alt="case_study_banner"
        />
      </figure>
      <DigitalSignageComp data={caseStudyData?.[0]} />
      <SmartClassroom data={caseStudyData?.[1]} />
      <SuccessStoryComp data={caseStudyData?.[2]} />
      <IndustrialComp data={caseStudyData?.[0]} />
    </CaseStudyUIWrapper>
  );
}

export default CaseStudyUI;
