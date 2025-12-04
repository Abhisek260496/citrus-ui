import { getOurStory } from "@/api/functions/cms.api";
import AimSection from "@/components/AimSection/AimSection";
import IsoVerfied from "@/components/IsoVerified/IsoVerfied";
import KeyPillars from "@/components/KeyPillars/KeyPillars";
import OurStoryBanner from "@/components/OurStoryBanner/OurStoryBanner";
import Processsors from "@/components/Processors/Processsors";
import Wrapper from "@/layout/wrapper/Wrapper";
import { useQuery } from "react-query";

const Index = () => {
  const { data: ourStoryContent, isLoading: ourStoryContentLoading } = useQuery(
    {
      queryKey: ["getOurStory"],
      queryFn: () => getOurStory()
    }
  );

  console.log(ourStoryContent?.[0], "ourStoryContent");

  return (
    <Wrapper>
      <OurStoryBanner />
      <Processsors />
      <KeyPillars />
      <AimSection />
      <IsoVerfied />
    </Wrapper>
  );
};
export default Index;
