import { CaseStudyUIWrapper } from "@/styles/styledComponents/CaseStudyUIWrapper";

import { commonMediaUrl } from "@/api/endpoints";
import { getCaseStudy, getCaseStudyBanner } from "@/api/functions/cms.api";
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

  const { data: caseStudyBannerData, isLoading: caseStudyBannerLoading } =
    useQuery({
      queryKey: ["getCaseStudyBanner"],
      queryFn: () => getCaseStudyBanner()
    });

  return (
    <CaseStudyUIWrapper>
      {csrLoading || (caseStudyBannerLoading && <Loader />)}
      <figure className="caseStudyBnrImg">
        <Image
          src={commonMediaUrl(caseStudyBannerData?.banner_image as string)}
          width={2055}
          height={1150}
          alt="case_study_banner"
        />
      </figure>
      <DigitalSignageComp data={caseStudyData?.[0]} />
      <SmartClassroom data={caseStudyData?.[1]} />
      <SuccessStoryComp data={caseStudyData?.[2]} />
      <IndustrialComp data={caseStudyData?.[3]} />
    </CaseStudyUIWrapper>
  );
}

export default CaseStudyUI;
