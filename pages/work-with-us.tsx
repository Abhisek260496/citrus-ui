import JobListSection from "@/components/JobListSection/JobListSection";
import WorkWithUsBanner from "@/components/WorkWithUsBanner/WorkWithUsBanner";
import Wrapper from "@/layout/wrapper/Wrapper";

function WorkWithUs() {
  return (
    <Wrapper>
      <WorkWithUsBanner />
      <JobListSection />
    </Wrapper>
  );
}

export default WorkWithUs;
